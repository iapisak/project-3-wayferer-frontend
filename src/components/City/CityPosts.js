import React, { Component } from 'react'
// import axios from 'axios'
import Post from '../Profile/Postlist/Post/Post';
import CreatePost from './CreatePost';

class CityPosts extends Component {
  state = {
    page:0
  }
  calculatePage = () => {
    const startIndex = this.state.page * 4
    const endIndex = startIndex + 4
    return this.props.posts.slice(startIndex,endIndex)
}
  incrementPage = () => {
    this.setState({page:this.state.page+1})
  }
  decrementPage = () => {
    this.setState({page:this.state.page-1})
  }
  render() {
    return(
      <div className="city-posts">
        <div className="city-posts-header">
          <h2>Posts</h2>
          <CreatePost
            city={this.props.city}
            cities = {this.props.cities}
            handleSubmit={this.props.handleSubmit}
          />
        </div>
        {this.calculatePage().map(post => {
          return <Post post={post} key={post._id}/>
        })}
        <button onClick={this.decrementPage}>-</button>
        <button onClick={this.incrementPage}>+</button>


      </div>
    );
  }
}

export default CityPosts;
