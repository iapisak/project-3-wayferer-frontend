import React, {Component} from 'react';

import './City.css'

const defaultState = {
      title : '',
      content : '',
      titleError: '',
      contentError: '',
      disabled: false,
};

class CreatePost extends Component{
  state = {
      title : '',
      content : '',
      titleError: '',
      contentError: '',
      disabled: false,
      defualtCity:'',
      cities:'',
      intitalSlug: this.props.city.slug,
      dropdownSlug:'',
      changed:false
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
        this.setState({disabled:false, titleError, contentError})
        return true
      }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, this.postValidation)

  }

  handleDropdown = (e) =>{
    this.setState({
      dropdownSlug:e.target.value,
      changed:true
    })
  }
  componentDidUpdate = () =>{
    if(this.state.intitalSlug !== this.props.city.slug)
    this.setState({
      intitalSlug:this.props.city.slug,
      dropdownSlug:this.props.city.slug
    })
  }
  componentDidMount = () =>{
    this.setState({
      intitalSlug:this.props.city.slug,
      dropdownSlug:this.props.city.slug
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    const postValidation = this.postValidation()

    if (postValidation) {
      const { city } = this.props;
      const newPost = {
        title: this.state.title,
        content: this.state.content,
        city: city._id,
      };
      this.props.handleSubmit(e, newPost, this.state.dropdownSlug);

      this.setState({
        title: '',
        content: '',
        disable: null
      });
    }
  }

  render(){
    return (
      <>
        <button
          type="button"
          className="btn btn-primary create-post"
          data-toggle="modal"
          data-target="#createPost"
        >
          <i className="fas fa-plus-circle fa-2x"></i>
        </button>

        <div
          className="modal fade"
          id="createPost"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="Edit post form"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <select id="city-select" onChange={this.handleDropdown} value={this.state.dropdownSlug}>
                 {this.props.cities.map(city=>{
                  return <option value={city.slug} key={city._id}>{city.name}</option>
                 })}
                </select>
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
                    onClick={this.handleClick}
                    className={`btn btn-primary ${this.state.disable}`}
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

export default CreatePost;
