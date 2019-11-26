import React, { Component } from 'react';


const defaultState = {
  titleError: '',
  contentError: '',
  disabled: false,
};

class EditPost extends Component {
  state = {
    title: this.props.post.title,
    content: this.props.post.content,
    titleError: '',
    contentError: '',
    disabled: false,
  };

  postValidation = () => {
    const { title, content } = this.state
    let titleError = ''
    let contentError = ''

    if (title === '') {
        titleError = `Required, this field can not be empty`
    } else if (title.length < 1 || title.length >200) {
        titleError = `Title must be between 1-200 characters.`
    }
    if (content === '') {
        contentError = `Required, this field can not be empty`
    }
    if (titleError || contentError) {
        this.setState({ titleError, contentError, disabled: true })
        return false
    }
    if (title !== '' && content !== '') {
      console.log(true)
      this.setState({disabled:false, titleError, contentError})
      return true
    }
}

  handleChange = (e) => {
    console.log(this)
    this.setState({
      [e.target.name]: e.target.value,
    }, this.postValidation)
  };

  render() {
    const updated = {
      ...this.props.post,
      title: this.state.title,
      content: this.state.content,
    };

    return (
    <>
      <div
        className="modal fade"
        id={`editPost${this.props.post._id}`}
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
              <span onClick={()=> {this.setState(defaultState)}} aria-hidden="true">&times;</span>
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
                <div className='alert'>{this.state.titleError}</div>
                <textarea
                  onChange={this.handleChange}
                  name="content"
                  value={this.state.content}
                  style={{width:'450px', height: '200px',margin:"10px"}}
                ></textarea>
                <div className='alert'>{this.state.contentError}</div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  onClick={(e) => this.props.handleSubmit(e, updated)}
                  className="btn btn-primary"
                  data-dismiss="modal"
                  disabled={this.state.disabled}
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
