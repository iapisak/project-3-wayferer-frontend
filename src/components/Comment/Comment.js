import React from 'react'
import './Comment.css'

const Comment = (props) => {
    const {comment} = props
   
    return(
    <div className='comment'>
      <div className="user-detail">
        <h5>{comment.user.name}</h5>
        <div className="user-image" style={{backgroundImage:`url(${comment.user.profilePhoto})`}}/>
      </div>
      <p className="comment-body">{comment.content}</p>
    </div>
    )
}


export default Comment