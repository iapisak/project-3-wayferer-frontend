import React, { Component } from 'react';
import axios from 'axios';
import CityList from './CityList'
import CityPosts from './CityPosts'
import './City.css'
class CitiesContainer extends Component {
    state = {
        ajaxLoaded: false,
        cities: [],
        cityPosts: [],
        activeCity:""
    };
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/cities`).then(cities => {
            this.setState({cities:cities.data.data});
        });
    }
    displayPosts = (_id) => {
        axios.get(`${process.env.REACT_APP_API_URL}/cities/${_id}/posts`)
        .then(posts => {
            console.log(posts.data.data.posts)
            this.setState({posts:posts.data.data.posts,ajaxLoaded:true,activeCity:_id})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
        <>
            <h1>Cities</h1>
            <CityList displayPosts = {this.displayPosts} cities={this.state.cities}/>
            <CityPosts id={this.state.activeCity} posts={this.state.cityPosts}/>
        </>
            );
    }
}

export default CitiesContainer