import React, { Component } from 'react';
import axios from 'axios';
import Navbars from './components/Navbars/Navbars'
import Routes from './config/Routes'

import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    console.log('logout')
    console.log(localStorage)
    localStorage.removeItem('uid');
    console.log(localStorage)
    axios.get(`${process.env.REACT_APP_API_URL}/logout`, { withCredentials: true }
    ).then(res => {
      console.log(res)
        this.setState({ currentUser: null });
        // this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbars setCurrentUser={this.setCurrentUser} logout={this.logout} currentUser={this.state.currentUser}/>
        <Routes
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />
      </div>
    );
  }
}

export default App;
