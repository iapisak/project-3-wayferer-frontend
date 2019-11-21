import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'

class Navbars extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="#">WAYFARER</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">Profile</NavLink>
                </li>
                <li className="nav-item" data-toggle="modal" data-target="#signIn" >Sign In</li>
                <li className="nav-item" data-toggle="modal" data-target="#signUp" >Sign UP</li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="modal fade" id="signIn" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Sign In</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Login />
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Signup />
              </div>
            </div>
          </div>
        </div>

      </>

    )
  }
}

export default Navbars