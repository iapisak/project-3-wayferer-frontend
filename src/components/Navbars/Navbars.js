import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbars = () => {
        return (
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
                    <NavLink className="nav-link" to="#">Sign In</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="#">Sign Up</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="#">Profile</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
}

export default Navbars