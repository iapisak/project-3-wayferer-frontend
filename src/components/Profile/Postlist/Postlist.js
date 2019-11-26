import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    const postId = updated._id;
    axios.put(
      `${process.env.REACT_APP_API_URL}/posts/${postId}/edit`,
      updated
    ).then((res) => {
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
    .then(() => {
      this.setState({ edited: true });
      this.props.history.push(this.props.location.pathname);
    })
    .catch(err => console.log(err));
  };

  fetchPosts = () => {
    // const userId = localStorage.getItem('uid');
    const profileUserSlug = this.props.location.pathname.split('/')[2];
    axios.get(
      `${process.env.REACT_APP_API_URL}/users/${profileUserSlug}/posts`,
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

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.fetchPosts();
    }
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

export default withRouter(Postlist);
