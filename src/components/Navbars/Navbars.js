import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'


import './Navbars.css'

class Navbars extends Component {

  state = {
    loginDisplay: {display: 'none'},
    signupDisplay: {display: 'none'}
  }

  handleModelOnClick = () => {
    if (this.state.loginDisplay.display === 'none') {
      this.setState({loginDisplay: {display: 'block' }})
    } else {
      this.setState({loginDisplay: {display: 'none' }})
    }
  }

  handleModelOnClickSignup = () => {
    console.log('click')
    if (this.state.signupDisplay.display === 'none') {
      this.setState({signupDisplay: {display: 'block' }})
    } else {
      this.setState({signupDisplay: {display: 'none' }})
    }
  }


  authenticated = (currentUser) => {
    const isUser = (
      <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
      </li>
      <li className="nav-item" onClick={ this.props.logout }>Log Out</li>
      </>
    )
    const isGuest = (
        <>
        <li className="nav-item" onClick={this.handleModelOnClick} >Sign In</li>
        <li className="nav-item" onClick={this.handleModelOnClickSignup} >Sign UP</li>
        <li className="nav-item" onClick={ this.props.logout }>Log Out</li>
        </>
    );

    if (currentUser !== null) {
      return isUser
    } else {
      return isGuest
    }
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">WAYFARER</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                { this.authenticated(this.props.currentUser)}
              </ul>
            </div>
          </div>
        </nav>

        <div className='modal-container' style={this.state.loginDisplay}>
          <Login setCurrentUser={this.props.setCurrentUser} handleModelOnClick={this.handleModelOnClick}/>
        </div>

        <div className="modal-container-signup" style={this.state.signupDisplay}>
          <Signup handleModelOnClickSignup={this.handleModelOnClickSignup} />
        </div>
      </>
    )
  }
}

export default Navbars