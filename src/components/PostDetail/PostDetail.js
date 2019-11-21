import React, { Component } from 'react';
import axios from 'axios';

class PostDetail extends Component {
  state = {
    post: {
      title: 'test title',
      content: 'test content',
    },
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
        <p>{content}</p>
      </>
    );
  }
}

export default PostDetail;
