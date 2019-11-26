import React, { Component } from 'react'
// import axios from 'axios'
import Post from '../Profile/Postlist/Post/Post';
import CreatePost from './CreatePost';
import './City.css'

class CityPosts extends Component {
  state = {
    page: 0,
    totalPages: 1,
    multiplePages: false,
  }
  calculatePage = () => {
    const startIndex = this.state.page * 4
    const endIndex = startIndex + 4
    return this.props.posts.slice(startIndex,endIndex)
}
  incrementPage = () => {
    const { page, totalPages } = this.state;
    this.setState({
      page: page < (totalPages - 1) ? page + 1 : page,
    })
  };

  decrementPage = () => {
    const { page } = this.state;
    this.setState({
      page: page > 0 ? page - 1 : page,
    });
  }

  setMultiplePages = () => {
    const totalPages = Math.ceil(this.props.posts.length / 4);
    this.setState({
      totalPages,
      multiplePages: totalPages > 1 ? true : false,
    });
  };

  componentDidMount() {
    this.setMultiplePages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.posts.length !== this.props.posts.length) {
      this.setMultiplePages();
    }
  }

  render() {
    return(
      <div className="city-posts">
        <div className="city-posts-header">
          <h2>Posts</h2>
          <CreatePost
            city={this.props.city}
            cities = {this.props.cities}
            handleSubmit={this.props.handleCreateSubmit}
          />
        </div>
        {this.calculatePage().map(post => {
          return (
            <Post
              post={post}
              key={post._id}
              handleEditSubmit={this.props.handleEditSubmit}
              handleDelete={this.props.handleDelete}
            />
          );
        })}
        {this.state.multiplePages
          &&
            <div>
              <button
                onClick={this.decrementPage}
                className="city-increment"
              >
                <i className="fas fa-minus-circle"></i>
              </button>
              <button
                onClick={this.incrementPage}
                className="city-decrement"
              >
                <i className="fas fa-plus-circle"></i>
              </button>
            </div>
        }

      </div>
    );
  }
}

export default CityPosts;
