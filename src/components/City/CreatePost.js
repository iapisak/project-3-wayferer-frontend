import React, {Component} from 'react';

class CreatePost extends Component{
  state = {
    title : '',
    content : '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = (e) => {
    const { city } = this.props;
    const newPost = {
      title: this.state.title,
      content: this.state.content,
      city: city._id,
    };
    this.props.handleSubmit(e, newPost, city.slug);

    this.setState({
      title: '',
      content: '',
    });
  }

  render(){
    const { city } = this.props;
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#editPost"
        >
          +
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
                {`Create a post for ${city.name}`}
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
                    onClick={this.handleClick}
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

export default CreatePost;
