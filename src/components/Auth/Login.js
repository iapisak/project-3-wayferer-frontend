import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleOnSubmit = e => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API_URL}/users/login`, this.state, { withCredentials: true })
        .then((res) => {
            console.log(res.data)
            this.props.setCurrentUser(res.data.data.id)
            this.setState({ email: '', password: '' })
            this.props.history.push('/profile')
            this.props.handleModelOnClick()

        })
        .catch((err) => console.log(err))
    }

    render () {
        return (

        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Sign In</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span onClick={this.props.handleModelOnClick}>&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <form className="form-signin" onSubmit={ this.handleOnSubmit }>
                        <div className="form-label-group">
                            <label htmlFor="inputEmail">Email address</label>
                            <input onChange={ this.handleOnChange } type="email" name='email' id="inputEmail" className="form-control"  required  value={this.state.email} />
                        </div>
                        <div className="form-label-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input onChange={ this.handleOnChange } type="password" name='password' id="inputPassword" className="form-control" required value={ this.state.password } />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(Login)

