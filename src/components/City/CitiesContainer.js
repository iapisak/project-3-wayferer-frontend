import React, { Component } from 'react';
import axios from 'axios';
import CityList from './CityList'
import './City.css'
class CitiesContainer extends Component {
    state = {
        ajaxLoaded: false,
        cities: [],
        cityPosts: []
    };
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/cities`).then(cities => {
            console.log(cities);
        });
    }
    displayPosts(_id){
        console.log({_id})
    }
    render() {
        return (
        <>
            <h1>Cities</h1>
            <CityList displayPosts={this.displayPosts}/>
        </>
            );
    }
}

export default CitiesContainer