import React, { Component } from 'react';
import { Widget } from "@uploadcare/react-widget";

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
    const { handleSubmit, pictureUploaded, fileUploadHandler} = this.props;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
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
        </div>
        <Widget
          publicKey="38e56a09985595f94b66"
          onChange={pictureUploaded}
          type="file"
        />
        <button onClick={fileUploadHandler}>Submit</button>
      </div>
    );
  }
}

export default ProfileEditForm;
