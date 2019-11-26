import React from 'react'
import './Comment.css'
import { Link, withRouter } from 'react-router-dom';
const Comment = (props) => {
    const {comment} = props
    const timeElapsed = (Date.now() - new Date(comment.timestamp).getTime())/1000 / 60
    console.log(timeElapsed)
    return(
    <div className='comment'>
      <div className="user-detail">
        <Link to={`/users/${comment.user.name}`}>
          <h5>{comment.user.name}</h5>
        </Link>
       
        <div className="user-image" style={{backgroundImage:`url(${comment.user.profilePhoto})`}}/>
      </div>
      <p className="comment-body">{comment.content}</p>
      <small>{timeElapsed.toFixed(2)} minutes ago</small>

    </div>
    )
}


export default withRouter(Comment)