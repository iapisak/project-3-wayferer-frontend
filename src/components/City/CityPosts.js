import React, { Component } from 'react'
// import axios from 'axios'
import Post from '../Profile/Postlist/Post/Post'

class CityPosts extends Component {
  render() {
    return(
      <div className="city-posts">
        <div className="city-posts-header">
          <h2>Posts</h2>
        </div>
        {this.props.posts.map(post => {
          return <Post post={post} key={post._id}/>
        })}
      </div>
    );
  }
}

export default CityPosts;
