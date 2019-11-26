import React from 'react'
import './Comment.css'

const Comment = (props) => {
    const {comment} = props
    return(
      <div className='comment'>
    <h5>{comment.user.name}</h5>
    <p className="comment-body">{comment.content}</p>
    </div>
    )
}


export default Comment