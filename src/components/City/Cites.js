import React, { Component } from 'react';
import axios from 'axios';

class Cities extends Component {
    state = {
        ajaxLoaded:false,
        cities:[],
        cityPosts:[]
    }

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_API_URL}/cities`).then(cities=>{
            console.log(cities)
        })
    }
    render(){
        return(
            <h1>Cities</h1>
        )
    }
}

export default Cities