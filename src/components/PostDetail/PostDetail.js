import React, { Component } from 'react';
import axios from 'axios';
import PostContent from '../Profile/Postlist/Post/PostContent';
import './PostDetail.css';

class PostDetail extends Component {
  state = {
    post: {
      title: 'test title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis. Libero id faucibus nisl tincidunt eget. Sed libero enim sed faucibus turpis in eu. Elementum pulvinar etiam non quam lacus suspendisse. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Tristique et egestas quis ipsum. Arcu risus quis varius quam quisque id diam vel quam. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Proin sed libero enim sed faucibus turpis in eu mi. Sagittis nisl rhoncus mattis rhoncus. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Elementum pulvinar etiam non quam lacus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ornare lectus sit amet est placerat. Faucibus in ornare quam viverra orci sagittis eu volutpat. Cras fermentum odio eu feugiat. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Pretium fusce id velit ut.',
    },
    ajaxLoaded: false,
  }

  openEditForm = () => {

  };

  componentDidMount() {
    const postId = this.props.match.params.post_id;
    axios.get(
      `${process.env.REACT_APP_API_URL}/posts/${postId}`,
      { withCredentials: true}
    ).then((res) => {
      console.log(res);
      this.setState({
        post: res.data.post,
        ajaxLoaded: true,
      });
    }).catch((err) => console.log(err));
  }

  render() {
    const { title, content } = this.state.post;
    return (
      <div className="container">
        <div className="post-detail-header">
          <h1>{title}</h1>
          <button onClick={()=>{}} className="btn btn-primary">
            Edit post
          </button>
        </div>
        {this.state.ajaxLoaded &&
          <PostContent content={content}/>}
      </div>
    );
  }
}

export default PostDetail;
