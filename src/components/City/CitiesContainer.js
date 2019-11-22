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
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/cities`).then(cities => {
            this.setState({cities:cities.data.data});
        });
    }
    displayPosts = (slug) => {
        axios.get(`${process.env.REACT_APP_API_URL}/cities/${slug}/posts`)
        .then(posts => {
            console.log(posts.data.posts)
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
            <CreatePost/>
            <CityList displayPosts = {this.displayPosts} cities={this.state.cities}/>
            {this.state.ajaxLoaded &&
                <CityPosts id={this.state.activeCity} posts={this.state.posts}/>}
        </>
            
           
            
            );
    }
}

export default CitiesContainer