import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import CityPosts from './CityPosts';

import './City.css';

class CityDetail extends Component {
  state = {
    posts: [],
    ajaxLoaded: false,
    edited: false,
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

  handleDelete = (post) => {
    setTimeout(1000)
    axios.delete(
      `${process.env.REACT_APP_API_URL}/posts/${post._id}/delete/`,
      { withCredentials: true }
    )
    .then((res) => {
      this.setState({ edited: true });
      this.props.history.push(this.props.location.pathname);
    })
    .catch(err => console.log(err));
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
      },
      {
        withCredentials: true
      }
    ).then((res)=>{
      if (res.data.data.city === this.props.city._id) {
        const newPosts = this.state.posts.concat(res.data.data);
        newPosts.sort((post1, post2) => {
            return new Date(post2.timestamp) - new Date(post1.timestamp);
        });
        this.setState({
            posts: newPosts,
        });
      } else {
        this.props.history.push(`/${slug}`);
      }
    })
  };

  handleEditSubmit = (e, updated) => {
    e.preventDefault();
    updated.user = localStorage.getItem('uid');
    console.log(updated)
    const postId = updated._id;
    axios.put(
      `${process.env.REACT_APP_API_URL}/posts/${postId}/edit`,
      updated
    ).then((res) => {
      console.log(res)
      this.setState(prevState => ({
        edited: true,
        ajaxLoaded: true,
      }));
    })
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city || this.state.edited) {
      this.fetchPosts();
      this.setState({ edited: false });
    }
  }

  render() {
    const { city } = this.props;
    console.log(this.props)

    return(
      <div className="city-detail">
        <div className ="city-top-banner">
          <img src={city.photo} className="city-photo" alt=""/>
          <div className = "city-title">
            <h2>{city.name}</h2>
            <p>{city.description}</p>
          </div>
        </div>
        {this.state.ajaxLoaded &&
          <CityPosts
            city={city}
            cities = {this.props.cities}
            posts={this.state.posts}
            handleCreateSubmit={this.handleCreateSubmit}
            handleEditSubmit={this.handleEditSubmit}
            handleDelete={this.handleDelete}
          />}
      </div>
    );
  }
}

export default withRouter(CityDetail);