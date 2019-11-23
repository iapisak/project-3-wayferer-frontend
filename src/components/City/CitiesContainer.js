import React, { Component } from 'react';
import axios from 'axios';
import CityList from './CityList'
import CityPosts from './CityPosts'
import CreatePost from './CreatePost'
import './City.css'
class CitiesContainer extends Component {
    state = {
        ajaxLoaded: false,
        cities: [],
        posts: [],
        activeCity:""
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
            console.log(res);
            const newPosts = this.state.posts.concat(res.data.data);
            newPosts.sort((post1, post2) => {
                return new Date(post2.timestamp) - new Date(post1.timestamp);
            });
            this.setState({
                posts: newPosts,
            });
        })
      }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/cities`).then(cities => {
            this.setState({cities:cities.data.data});
        });
    }
    displayPosts = (slug) => {
        axios.get(`${process.env.REACT_APP_API_URL}/cities/${slug}/posts`)
        .then(posts => {
            posts.data.posts.sort((post1, post2) => {
                return new Date(post2.timestamp) - new Date(post1.timestamp);
            })
            this.setState({
                posts: posts.data.posts,
                ajaxLoaded: true,
                activeCity: slug,
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
        <>
            <h1>Cities</h1>
            <CreatePost handleSubmit={this.handleCreateSubmit}/>
            <CityList displayPosts = {this.displayPosts} cities={this.state.cities}/>
            {this.state.ajaxLoaded &&
                <CityPosts id={this.state.activeCity} posts={this.state.posts}/>}
        </>



            );
    }
}

export default CitiesContainer