import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post/Post';

class Postlist extends Component {
  state = {
    ajaxLoaded: false,
    edited: false,
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
  };

  handlePostEditSubmit = (e, updated) => {
    e.preventDefault();
    updated.user = localStorage.getItem('uid');
    console.log(updated)
    const postId = updated._id;
    axios.put(
      `${process.env.REACT_APP_API_URL}/posts/${postId}/edit`,
      updated
    ).then((res) => {
      console.log(res)
      this.setState(prevState => ({
        edited: true,
        ajaxLoaded: true,
      }));
    })
  };

  handleDelete = (post) => {
    setTimeout(1000)
    axios.delete(
      `${process.env.REACT_APP_API_URL}/posts/${post._id}/delete/`,
      { withCredentials: true }
    )
    .then(
      this.props.history.push('/')
    )
    .catch(err => console.log(err));
  };

  fetchPosts = () => {
    const userId = localStorage.getItem('uid');
    axios.get(
      `${process.env.REACT_APP_API_URL}/users/${userId}/posts`,
      { withCredentials: true}
    ).then((res) => {
      res.data.posts.sort((post1, post2) => {
        return new Date(post2.timestamp) - new Date(post1.timestamp);
      });
      this.setState({
        posts: res.data.posts,
        ajaxLoaded: true,
      });
    }).catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate() {
    if (this.state.edited) {
      this.fetchPosts();
      this.setState({
        edited: false,
      })
    }
  }

  render() {
    return (
      <div className="postlist">
        <h2>Posts</h2>
        {this.state.ajaxLoaded && this.state.posts.map((post) => (
          <Post
            post={post}
            key={post._id}
            handleEditSubmit={this.handlePostEditSubmit}
            handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Postlist;
