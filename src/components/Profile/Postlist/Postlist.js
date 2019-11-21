import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post/Post';

class Postlist extends Component {
  state = {
    posts: [
      {
        title: 'fake1',
        content: 'fake content'
      },
      {
        title: 'fake2',
        content: 'fake content'
      },
      {
        title: 'fake3',
        content: 'fake content'
      },
    ],
  }

  componentDidMount() {
    const userId = localStorage.getItem('uid');
    axios.get(
      `${process.env.REACT_APP_API_URL}/users/${userId}/posts`,
      { withCredentials: true}
    ).then((res) => {
      console.log(res);
      this.setState({
        posts: res.data.posts,
      });
    }).catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="postlist">
        <h2>Posts</h2>
        {this.state.posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    );
  }
}

export default Postlist;
