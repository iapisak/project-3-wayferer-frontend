import React, { Component } from 'react';
import axios from 'axios';
import Navbars from './components/Navbars/Navbars'
import { withRouter } from 'react-router-dom'
import Routes from './config/Routes'

import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
    username: localStorage.getItem('username'),
  };

  setCurrentUser = (userId, username) => {
    this.setState({ currentUser: userId, username });
    localStorage.setItem('uid', userId);
    localStorage.setItem('username', username);
  };

  logout = () => {
    localStorage.removeItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/logout`, { withCredentials: true }
    ).then(res => {
      this.setState({ currentUser: null, username: '' });
      this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbars
          currentUser={this.state.currentUser}
          username={this.state.username}
          setCurrentUser={this.setCurrentUser}
          logout={this.logout}
        />
        <Routes
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />
      </div>
    );
  }
}

export default withRouter(App);
