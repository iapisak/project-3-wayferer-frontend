import React, { Component } from 'react';
import axios from 'axios';
import CityPosts from './CityPosts';

class CityDetail extends Component {
  state = {
    posts: [],
    ajaxLoaded: false,
    activeCity: this.props.city,
  };

  fetchPosts = () => {
    const { city } = this.props;
    axios.get(`${process.env.REACT_APP_API_URL}/cities/${city.slug}/posts`)
    .then(posts => {
        posts.data.posts.sort((post1, post2) => {
            return new Date(post2.timestamp) - new Date(post1.timestamp);
        });
        this.setState({
            posts: posts.data.posts,
            ajaxLoaded: true,
        });
    })
    .catch(err => {
        console.log(err)
    })
  };

  handleCreateSubmit = (e, newPost, slug) => {
    e.preventDefault();
    const userId = localStorage.getItem('uid');
    const timestamp = (new Date()).getTime();

    axios.post(
      `${process.env.REACT_APP_API_URL}/cities/${slug}/posts/new`,
      {
        ...newPost,
        timestamp,
        user :userId,
      }
    ).then((res)=>{
        if(res.data.data.city === this.props.city._id){
        const newPosts = this.state.posts.concat(res.data.data);
        newPosts.sort((post1, post2) => {
            return new Date(post2.timestamp) - new Date(post1.timestamp);
        });
        this.setState({
            posts: newPosts,
        });
    }})
  }

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.fetchPosts();
    }
  }

  render() {
    const { city } = this.props;

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
            cities = {this.props.cities}
            posts={this.state.posts}
            handleSubmit={this.handleCreateSubmit}
          />}
      </div>
    );
  }
}

export default CityDetail;
