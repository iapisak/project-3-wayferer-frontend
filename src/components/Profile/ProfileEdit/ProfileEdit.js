import React, { Component } from 'react';

import '../Profile.css';

class ProfileEditForm extends Component {
  state = {
    name: '',
    currentCity: '',
  };

  componentDidMount() {
    this.setState({
      name: this.props.user.name,
      currentCity: this.props.user.currentCity,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  render() {
    const { handleSubmit, pictureUploaded} = this.props;
    return (
      <div className="mt-4 profile-edit">
        {/* <div className="row"> */}
          <div>
            <h4 className="mb-3">Edit your profile</h4>
            <form onSubmit={e=>{e.preventDefault();handleSubmit(this.state)}}>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
              </div>
              <div className="form-group">
                <label htmlFor="currentCity">Current City</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="currentCity" name="currentCity" value={this.state.currentCity} />
              </div>
              <button className="btn btn-primary float-right" type="submit">Submit</button>
            </form>
          </div>
        {/* </div> */}
      </div>
    );
  }
}

export default ProfileEditForm;
