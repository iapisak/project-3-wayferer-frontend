import React, {Component} from 'react'
import axios from 'axios'

class CommentForm extends Component{
  state = {
    body:'',
  }
 
  handleInput = (e) => {
    this.setState({
      body:e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={e=>{this.props.handleSubmit(e,this.state.body)}}>
      <input value={this.state.body} onChange={this.handleInput} type='text'></input>
      <button type='submit'>Comment</button>
      </form>
    )
  }
}

export default CommentForm