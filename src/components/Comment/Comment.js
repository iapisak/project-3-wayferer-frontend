import React from 'react'
import './Comment.css'
import { Link, withRouter } from 'react-router-dom';
const Comment = (props) => {
    const {comment} = props
    let timeElapsed = (Date.now() - new Date(comment.timestamp).getTime())/1000 / 60
    const determineTime = (input) => {
      let string = "minutes"
      if(timeElapsed > 60){
        timeElapsed = timeElapsed / 60
        string = 'hours'
      }

      if(timeElapsed > 24) {
        timeElapsed = timeElapsed / 24
        string = 'days'
      }
      timeElapsed = Math.floor(timeElapsed)

      return `${timeElapsed} ${string} ago`
    }
    return(
    <div className='comment'>
      <div className="user-detail">
        <Link to={`/users/${comment.user.name}`}>
          <h5>{comment.user.name}</h5>
        </Link>
       
        <div className="user-image" style={{backgroundImage:`url(${comment.user.profilePhoto})`}}/>
      </div>
      <p className="comment-body">{comment.content}</p>
      <small>{determineTime(timeElapsed)}</small>

    </div>
    )
}


export default withRouter(Comment)