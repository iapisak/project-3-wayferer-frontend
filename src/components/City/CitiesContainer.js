import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import CityList from './CityList';
import CityRouter from '../../config/CityRoutes';
import './City.css';

class CitiesContainer extends Component {
    state = {
        ajaxLoaded: false,
        cities: [],
        page:0,
    };

    findActiveCity = () => {
        const slug = this.props.location.pathname.replace('/', '');
        const activeCity = this.state.cities.find(city => city.slug === slug);
        return activeCity;
    };

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/cities`).then(cities => {
            this.setState({
                cities: cities.data.data,
                ajaxLoaded: true,
            });
        });
    }

    render() {
        return (
            <main className='main-home-page'>
                <div className="city-home">
                    <div className="city-list-container">
                        <CityList cities={this.state.cities}/>
                    </div>
                    {this.state.ajaxLoaded &&
                    <CityRouter
                        city={this.findActiveCity()}
                        cities={this.state.cities}
                        currentUser={this.props.currentUser}
                    />}
                </div>
            </main>
        );
    }
}

export default withRouter(CitiesContainer);
