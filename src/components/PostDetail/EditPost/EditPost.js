import React, { Component } from 'react';

class EditPost extends Component {
  state = {
    title: this.props.post.title,
    content: this.props.post.content,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  render() {
    const updated = {
      ...this.props.post,
      title: this.state.title,
      content: this.state.content,
    };

    return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#editPost"
      >
        Edit post
      </button>

      <div
        className="modal fade"
        id="editPost"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="Edit post form"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              Edit your post
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <label htmlFor="postTitle" style={{margin : '1px 0 0 10px'}}>
                  Title
                </label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  id="postTitle"
                  name="title"
                  value={this.state.title}
                  style={{width:'200px', margin : '10px 0 0 10px'}}
                />
                <textarea
                  onChange={this.handleChange}
                  name="content"
                  value={this.state.content}
                  style={{width:'450px', height: '200px',margin:"10px"}}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  onClick={(e) => this.props.handleSubmit(e, updated)}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >Submit</button>
              </div>
            </form>
        </div>
      </div>
      </div>
    </>
    );
  }
}

export default EditPost;
