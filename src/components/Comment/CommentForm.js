import React, {Component} from 'react'
import axios from 'axios'

class CommentForm extends Component{
  state = {
    body:''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const comment = {
      content:e.target.value
    }
    axios.post(`${process.env.REACT_APP_API_URL}/comment/${this.props.postId}`,comment)
  }

  render(){
    return(
      <form>
      <input type='text'></input>
      </form>
    )
  }
}

export default CommentForm