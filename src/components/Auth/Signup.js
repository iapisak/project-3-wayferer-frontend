import React, { Component } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';


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
      this.setState({ name: '', email: '', currentCity: '', password: '', password2: '', })
      this.props.handleModelOnClickSignup()
    }).catch((err) => console.log(err));
    var template_params = {
      "reply_to": this.state.email,
      "from_name": "WayFarer-SF",
      "to_name": this.state.name,
      "message_html": "Congratulations, you have signed up for wayfarer-SF, we hope you find our products useful."
   }
   var service_id = "default_service";
   var template_id = "template_GK77suy2";
   var user_id = "user_ctGR62rF5nLViffjCQ1A8"
   emailjs.send(service_id, template_id,template_params, user_id);
  };

  render() {
    return (
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span onClick={this.props.handleModelOnClickSignup}>&times;</span>
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
