import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'

class Navbars extends Component {

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
        <li className="nav-item" data-toggle="modal" data-target="#signIn" >Sign In</li>
        <li className="nav-item" data-toggle="modal" data-target="#signUp" >Sign UP</li>
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

        <div className="modal fade" id="signIn" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <Login setCurrentUser={this.props.setCurrentUser}/>
        </div>

        <div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <Signup />
        </div>
      </>
    )
  }
}

export default Navbars