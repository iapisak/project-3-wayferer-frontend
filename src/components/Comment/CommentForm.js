import React, {Component} from 'react'
import axios from 'axios'

class CommentForm extends Component{
  state = {
    body:''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const userId = localStorage.getItem('uid')
    const comment = {
      content:this.state.body,
      user:userId,
      timestamp:Date.now()
    }
    console.log(comment)
    axios.post(`${process.env.REACT_APP_API_URL}/comment/${this.props.postId}`,comment)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  handleInput = (e) => {
    this.setState({
      body:e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input value={this.state.body} onChange={this.handleInput} type='text'></input>
      <button type='submit'>Comment</button>
      </form>
    )
  }
}

export default CommentForm