import React, { Component } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

const initialState = {
    name: '',
    email: '',
    currentCity: '',
    password: '',
    password2: '',
    
    nameError: '',
    emailError: '',
    currentCityError: '',
    passwordError: '',
    password2Error: '',
}

class Signup extends Component {
  state = initialState;

  formValidation = () => {
    const { email, name, currentCity, password, password2 } = this.state

    let nameError = ''
    let emailError = ''
    let currentCityError = ''
    let passwordError = ''
    let password2Error = ''

    if (name.length < 3 && name !== Number ) {
      nameError = `Name must be at least 3 characters`
    }

    if (!email.includes('@')) {
      emailError = `Email must include '@'`
    }

    if (password.length < 6) {
      passwordError = `Password must be at least 6 characters`
    }

    if (password !== password2) {
      password2Error = `Please confirm your password again`
    }

    if (emailError || nameError || currentCityError ||  passwordError || password2Error) {
      this.setState({ emailError, nameError, currentCityError ,passwordError, password2Error })
      return false
    }
    return true
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formValidation = this.formValidation()
    if (formValidation) {
      this.setState(initialState)
    
      // axios.post(
      //   `${process.env.REACT_APP_API_URL}/users/create`,
      //   this.state
      // ).then((res) => {
        
      //   const template_params = {
      //     "reply_to": this.state.email,
      //     "from_name": "WayFarer-SF",
      //     "to_name": this.state.name,
      //     "message_html": "Congratulations, you have signed up for wayfarer-SF, we hope you find our products useful."
      //   }
    
      //   const service_id = "default_service";
      //   const template_id = "template_GK77suy2";
      //   const user_id = "user_ctGR62rF5nLViffjCQ1A8"
      //   emailjs.send(service_id, template_id,template_params, user_id);

      //   this.setState({ name: '', email: '', currentCity: '', password: '', password2: '', })
      //   this.props.handleModelOnClickSignup()
        
      // }).catch((err) => console.log(err));
    }
  };

  render() {

    const { nameError, emailError, currentCityError, passwordError, password2Error} = this.state
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
            <form id="signup" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
                <div className="alert">{nameError}</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="email" name="email" value={this.state.email} />
                <div className="alert">{emailError}</div>
              </div>
              <div className="form-group">
                <label htmlFor="currentCity">Current City</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="currentCity" name="currentCity" value={this.state.currentCity} />
                <div className="alert">{currentCityError}</div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
                <div className="alert">{passwordError}</div>
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
                <div className="alert">{password2Error}</div>
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
