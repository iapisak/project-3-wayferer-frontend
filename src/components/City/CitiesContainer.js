import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import CityList from './CityList';
import CityRouter from '../../config/CityRoutes';
// import CityDetail from './CityDetail';
import './City.css';

class CitiesContainer extends Component {
    state = {
        ajaxLoaded: false,
        cities: [],
        posts: [],
        page:0,
    };

    findActiveCity = () => {
        const slug = this.props.location.pathname.replace('/', '');
        const activeCity = this.state.cities.find(city => city.slug === slug);
        return activeCity;
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

    render() {
        return (
            <main className='main-home-page'>
                <div className="city-home">
                    <div className="city-list-container">
                        <h1>Cities</h1>
                        <CityList cities={this.state.cities}/>
                    </div>
                    <CityRouter
                        city={this.findActiveCity()}
                        posts={this.state.posts}
                        handleSubmit={this.handleCreateSubmit}
                    />
                </div>
            </main>
        );
    }
}

export default withRouter(CitiesContainer);
