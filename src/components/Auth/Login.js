import React, { Component } from 'react'
// import axios from 'axios'

class Login extends Component {
    state = {
        email: '',
        password: '',

    }

    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleOnSubmit = e => {
        e.preventDefault()
    }

    render () {
        return (
                <form className="form-signin" onSubmit={ this.handleOnSubmit }>
                    <div className="form-label-group">
                        <label for="inputEmail">Email address</label>
                        <input onChange={ this.handleOnChange } type="email" name='email' id="inputEmail" className="form-control"  required  value={this.state.email} />
                    </div>

                    <div className="form-label-group">
                        <label for="inputPassword">Password</label>
                        <input onChange={ this.handleOnChange } type="password" name='password' id="inputPassword" className="form-control" required value={ this.state.password } />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </div>
                </form>
        )
    }
}

export default Login

