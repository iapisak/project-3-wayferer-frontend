import React, { Component } from 'react';
import axios from 'axios';
import CityPosts from './CityPosts';

class CityDetail extends Component {
  state = {
    posts: [],
    ajaxLoaded: false,
    activeCity: {},
  };

  componentDidMount() {
    const { city } = this.props;
    axios.get(`${process.env.REACT_APP_API_URL}/cities/${city.slug}/posts`)
    .then(posts => {
        posts.data.posts.sort((post1, post2) => {
            return new Date(post2.timestamp) - new Date(post1.timestamp);
        })
        console.log(posts.data.posts)
        this.setState({
            posts: posts.data.posts,
            ajaxLoaded: true,
        });
    })
    .catch(err => {
        console.log(err)
    })
  }

  render() {
    const { city, handleSubmit } = this.props;

    return(
      <div className="city-detail">
        <div className ="city-top-banner">
          <img src={city.photo} className="city-photo" alt=""/>
          <div className = "city-title">
            <h2>{city.name}</h2>
            <p>A description goes here...</p>
          </div>
        </div>
        {this.state.ajaxLoaded &&
          <CityPosts
            city={city}
            posts={this.state.posts}
            handleSubmit={handleSubmit}
          />}
      </div>
    );
  }
}

export default CityDetail;
