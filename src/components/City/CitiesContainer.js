import React, { Component } from 'react';
import axios from 'axios';
import CityList from './CityList';
import CityDetail from './CityDetail';
import './City.css';

class CitiesContainer extends Component {
    state = {
        ajaxLoaded: false,
        cities: [],
        posts: [],
        page:0,
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

    displayPosts = (city) => {
        axios.get(`${process.env.REACT_APP_API_URL}/cities/${city.slug}/posts`)
        .then(posts => {
            posts.data.posts.sort((post1, post2) => {
                return new Date(post2.timestamp) - new Date(post1.timestamp);
            })
            this.setState({
                posts: posts.data.posts,
                ajaxLoaded: true,
                activeCity: city,
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <main className='main-home-page'>
                <div className="city-home">
                    <div className="city-list-container">
                        <h1>Cities</h1>
                        <CityList displayPosts = {this.displayPosts} cities={this.state.cities}/>
                    </div>
                    {this.state.ajaxLoaded &&
                        <CityDetail
                            city={this.state.activeCity}
                            posts={this.state.posts}
                            handleSubmit={this.handleCreateSubmit}
                        />}
                </div>
            </main>
        );
    }
}

export default CitiesContainer