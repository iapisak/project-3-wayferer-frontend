import React, {Component} from 'react'
import axios from 'axios'

class CreatePost extends Component{
  state={
    user: '',
    citiesList : [],
    ajaxLoaded : false,
    cityId: '',
    slug : '',
    title : '',
    content : '',
  };

  dropDownItemHandler = (e) => {
    const slug = e.target.value.slug;
    const cityId = e.target.value._id;
    this.setState({
      slug,
      cityId,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  componentDidMount(){
    axios.get(
      `${process.env.REACT_APP_API_URL}/cities`,
      {withCredentials : true}
    ).then((res)=>{
      this.setState({
        citiesList: res.data.data,
        slug: res.data.data[0].slug,
        ajaxLoaded: true,
      })
    })
  }

  render(){
    const { ajaxLoaded, slug } = this.state;
    const newPost = {
      title: this.state.title,
      content: this.state.content,
      city: this.state.cityId,
    }
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
                Create a post
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="dropdown show" style={{margin: '10px 0 5px 10px'}}>
                    <select onChange={this.dropDownItemHandler}>
                      {ajaxLoaded &&
                        this.state.citiesList.map(data=>{
                          return <option value={data} key={data._id}>{data.name}</option>
                      })}}
                    </select>
                  </div>
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
                    onClick={(e) => this.props.handleSubmit(e, newPost, slug)}
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

export default CreatePost