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
            <div className='container col-md-4'>
                <form className="form-signin" onSubmit={ this.handleOnSubmit }>
                    <div className="text-center mb-4">
                        <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                    </div>

                    <div className="form-label-group">
                        <label for="inputEmail">Email address</label>
                        <input onChange={ this.handleOnChange } type="email" name='email' id="inputEmail" className="form-control"  required  value={this.state.email} />
                    </div>

                    <div className="form-label-group">
                        <label for="inputPassword">Password</label>
                        <input onChange={ this.handleOnChange } type="password" name='password' id="inputPassword" className="form-control" required value={ this.state.password } />
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

export default Login

