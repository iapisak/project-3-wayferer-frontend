import React, { Component } from 'react';
// import axios from 'axios';

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
    console.log('submitted');
    // axios.post(
    //   `${process.env.REACT_APP_API_URL}/auth/register`,
    //   this.state
    // ).then((res) => {
    //   console.log(res);
    // }).catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container jumbotron mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h1 className="mb-3">Sign up</h1>
            <form onSubmit={this.handleSubmit}>
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
