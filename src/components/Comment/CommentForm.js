import React, {Component} from 'react'
import axios from 'axios'

import './Comment.css'

class CommentForm extends Component{
  state = {
    body:'',
    contentError: '',
    disabled: true,
  }

  handleInput = (e) => {
    this.setState({
      body:e.target.value
    }, this.commentValidation)
  }

  handleFocus = () => {
    this.setState({
      contentError: `Please fill in your comment`})
  }

  commentValidation = () => {
    const { body } = this.state
    let contentError = ''

    if (body === '') {
      contentError = `Please fill in your comment`
      this.setState({ contentError, disabled: true })
      return false
    }

    if (body !== '') {
      this.setState({disabled: false, contentError})
      return true
    }
  }

  commentFormSubmit = (e) => {
    this.setState({ body:'', contentError: '', disabled: true });
    this.props.handleSubmit(e,this.state.body);
  }

  render(){
    const clearState = { body:'', contentError: '', disabled: true }

    return(
      <>
      <form className="comment-form" onSubmit={this.commentFormSubmit}>
      <input className="comment-input" value={this.state.body} onFocus={this.handleFocus} onChange={this.handleInput} type='text'></input>
      <div className="alert">{this.state.contentError}</div>
      <button className="comment-submit" type='submit' disabled={this.state.disabled}>Comment</button>
      </form>
      <button onClick={() => this.setState(clearState)}>Clear</button>
      </>
    )
  }
}

export default CommentForm