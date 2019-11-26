import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import EditPost from '../../../EditPost/EditPost';
import './Post.css';

class Post extends Component {
  displayDeleteModal = () => {
    const { post, handleDelete } = this.props;
    return (
      <div className="modal fade" id={`deletemodal${post._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>handleDelete(this.props.post)}>Delete Forever</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const timeElapsed = (Date.now() - new Date(this.props.post.timestamp).getTime())/1000 / 60
    const { post } = this.props;
    const userId = typeof(post.user) === 'string' ? post.user : post.user._id;
    const postLink = `/posts/${post._id}`;
    return (
      <div className="post">
        <div className="post-info">
          <div className="post-info-header">
          <Link to={postLink}>
              <h4>{post.title}</h4>
            </Link>

            <Link to={`/users/${post.user.name}`}>
              <small className="post-info-author">{post.user.name}</small>
            </Link>
            <small className="post-info-author">  {timeElapsed.toFixed(2)} min ago</small>
          </div>
          {userId === localStorage.getItem('uid') &&
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                data-toggle="modal"
                data-target={`#editPost${post._id}`}
              >
                edit
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                data-toggle="modal" data-target={`#deletemodal${post._id}`}
              >delete</button>
            </div>
          }
          <EditPost
            post={post}
            handleSubmit={this.props.handleEditSubmit}
          />
          {this.displayDeleteModal()}
        </div>
        <p className="post-content-preview">{post.content.substring(0,90)}{post.content.length > 90 && '...'}</p>
      </div>
    );
  }
};

export default withRouter(Post);
