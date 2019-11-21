import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    currentCity: '',
    password: '',
    password2: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      `${process.env.REACT_APP_API_URL}/users/create`,
      this.state
    ).then((res) => {
      console.log(res);
    }).catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form  onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
              </div>
              <div className="form-group">
                <label htmlFor="currentCity">Current City</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="currentCity" name="currentCity" value={this.state.currentCity} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
              </div>
              <button className="btn btn-primary float-right" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
