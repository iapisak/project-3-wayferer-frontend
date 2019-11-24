import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import Carousel from './Carousel/Carousel';
import ArticlesContainer from './ArticlesContainer/ArticlesContainer';

import './Home.css'

class Home extends Component {
  state = {
    cityPhoto: [],
  }

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_API_URL}/cities`)
    .then((res)=>{
      this.setState({ cityPhoto: res.data.data })
    })
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <main>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous ></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
          <div className="carousel-inner">
            <div className="carousel-item active bg-dark" style={{ backgroundImage:`url('https://loving-newyork.com/wp-content/uploads/2019/09/fun-things-to-do-in-nyc-at-night-160914155540002-1920x960.jpg` }}>
              <h1>Welcome to Warferer</h1>
            </div>
            {this.state.cityPhoto.map((list) => (
              <Carousel photo={list.photo} key={list._id} name={list.name} />
            ))}
          </div>
        </div>
        <div className="home container">
          <h1>WAYFARER</h1>
          <ArticlesContainer />
        </div>
      </main>
    )
  }
}

export default withRouter(Home);
