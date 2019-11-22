import React, { Component } from 'react';
import axios from 'axios';
import CityList from './CityList'
import CityPosts from './CityPosts'
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
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
            </button>
            <CityList displayPosts = {this.displayPosts} cities={this.state.cities}/>
            {this.state.ajaxLoaded &&
                <CityPosts id={this.state.activeCity} posts={this.state.posts}/>}
        </>
            );
    }
}

export default CitiesContainer