import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import PostContent from '../Profile/Postlist/Post/PostContent';
import EditPost from './EditPost/EditPost';
import './PostDetail.css';

class PostDetail extends Component {
  state = {
    post: {
      title: 'test title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis. Libero id faucibus nisl tincidunt eget. Sed libero enim sed faucibus turpis in eu. Elementum pulvinar etiam non quam lacus suspendisse. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Tristique et egestas quis ipsum. Arcu risus quis varius quam quisque id diam vel quam. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Proin sed libero enim sed faucibus turpis in eu mi. Sagittis nisl rhoncus mattis rhoncus. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Elementum pulvinar etiam non quam lacus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ornare lectus sit amet est placerat. Faucibus in ornare quam viverra orci sagittis eu volutpat. Cras fermentum odio eu feugiat. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Pretium fusce id velit ut.',
    },
    postCity: { name: 'testtown, USA' },
    ajaxLoaded: false,
  };

  deleteSelf = (e) => {
    setTimeout(1000)
    axios.delete( `${process.env.REACT_APP_API_URL}/posts/${this.state.post._id}/delete`)
    .then(
      this.props.history.push('/cities')
    )
    .catch(err => console.log(err));
  };

  handleEditSubmit = (e, updated) => {
    e.preventDefault();
    const postId = this.state.post._id;
    axios.put(
      `${process.env.REACT_APP_API_URL}/posts/${postId}/edit`,
      updated
    ).then((res) => {
      console.log(res)
      this.setState({
        post: res.data.data,
      });
    })
  };

  componentDidMount() {
    const postId = this.props.match.params.post_id;
    axios.get(
      `${process.env.REACT_APP_API_URL}/posts/${postId}`,
      { withCredentials: true}
    ).then((res) => {
      this.setState({
        post: res.data.post,
        postCity: res.data.post.city,
        ajaxLoaded: true,
      });
    }).catch((err) => console.log(err));
  }

  render() {
    const { title, content } = this.state.post;
    const { ajaxLoaded } = this.state;
    return (
      <div className="container">
        <div className="post-detail-header">
          <h1>{title}</h1>
          {ajaxLoaded &&
            <EditPost
              post={this.state.post}
              city={this.state.postCity}
              handleSubmit={this.handleEditSubmit}/>}
      
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
     </div>
    <div>
      {ajaxLoaded &&
        <>
          <p>{this.state.postCity.name}</p>
          <PostContent content={content}/>
        </>
      }
    </div>
    </div>
    );
  }
}

export default withRouter(PostDetail);
