import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import EditPost from '../../../EditPost/EditPost';
import './Post.css';

class Post extends Component {
  state = {
    post: this.props.post,
  };

  deleteSelf = (e) => {
    setTimeout(1000)
    const userId = localStorage.getItem('uid');
    axios.delete( `${process.env.REACT_APP_API_URL}/posts/${this.props.post._id}/delete/`,{withCredentials:true})
    .then(
      this.props.history.push('/')
    )
    .catch(err => console.log(err));
  };

  displayDeleteModal = () => {
    return (
      <div className="modal fade" id="deletemodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
    );
  }

  handleEditSubmit = (e, updated) => {
    e.preventDefault();
    updated.user = localStorage.getItem('uid');
    console.log(updated)
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

  render() {
    const { post } = this.props;
    const postLink = `/posts/${post._id}`;
    return (
      <div className="post">
        <div className="post-info">
          <Link to={postLink}>
            <h4>{post.title}</h4>
          </Link>
          {post.user === localStorage.getItem('uid') &&
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                data-toggle="modal"
                data-target="#editPost"
              >
                edit
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                data-toggle="modal" data-target="#deletemodal"
              >delete</button>
            </div>
          }
          <EditPost
            post={this.state.post}
            city={this.state.postCity}
            handleSubmit={this.props.handleEditSubmit}
          />
          {this.displayDeleteModal()}
        </div>
        <p>{post.content.substring(0,90)}{post.content.length > 90 && '...'}</p>
      </div>
    );
  }
};

export default withRouter(Post);
