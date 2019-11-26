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
      <form className="comment-form" onSubmit={e=>{this.props.handleSubmit(e,this.state.body)}}>
      <input className="comment-input" value={this.state.body} onChange={this.handleInput} type='text'></input>
      <button className="comment-submit" type='submit'>Comment</button>
      </form>
    )
  }
}

export default CommentForm