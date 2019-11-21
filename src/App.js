import React from 'react';
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
    localStorage.removeItem('uid');
    axios.post(
      `${process.env.REACT_APP_BASE_API}/auth/logout`,
      { withCredentials: true }
    ).then(res => {
        this.setState({ currentUser: null });
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Wayfarer</h1>
        <Navbars />
        <Routes
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />
      </div>
    );
  }
}

export default App;
