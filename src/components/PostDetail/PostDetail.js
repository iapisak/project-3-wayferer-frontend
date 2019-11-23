import React, { Component } from 'react';
import axios from 'axios';
import PostContent from '../Profile/Postlist/Post/PostContent'
import {withRouter} from 'react-router-dom'
class PostDetail extends Component {
  state = {
    post: {
      title: 'test title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis. Libero id faucibus nisl tincidunt eget. Sed libero enim sed faucibus turpis in eu. Elementum pulvinar etiam non quam lacus suspendisse. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Tristique et egestas quis ipsum. Arcu risus quis varius quam quisque id diam vel quam. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Proin sed libero enim sed faucibus turpis in eu mi. Sagittis nisl rhoncus mattis rhoncus. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Elementum pulvinar etiam non quam lacus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ornare lectus sit amet est placerat. Faucibus in ornare quam viverra orci sagittis eu volutpat. Cras fermentum odio eu feugiat. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Pretium fusce id velit ut.',
    },
  }
  deleteSelf = (e) => {
    setTimeout(1000)
    axios.delete( `${process.env.REACT_APP_API_URL}/posts/${this.state.post._id}/delete`)
    .then(
      this.props.history.push('/cities')
    )
    .catch(err => console.log(err))
  }
  componentDidMount() {
    const postId = this.props.match.params.post_id;
    axios.get(
      `${process.env.REACT_APP_API_URL}/posts/${postId}`,
      { withCredentials: true}
    ).then((res) => {
      console.log(res);
      this.setState({
        post: res.data.post,
      });
    }).catch((err) => console.log(err));
  }

  render() {
    const { title, content } = this.state.post;
    return (
      <>
        <h1>{title}</h1>


<div className="modal fade" id="deletemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Confirm Delete</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        This will permanently delete this post
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.deleteSelf}>Delete Forever</button>
      </div>
    </div>
  </div>
</div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#deletemodal">
  Delete
</button>
        <p><PostContent content={content}/></p>
      </>
    );
  }
}

export default withRouter(PostDetail);
