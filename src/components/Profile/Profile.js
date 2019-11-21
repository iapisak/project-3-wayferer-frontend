import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo/UserInfo';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import Postlist from './Postlist/Postlist';
import './Profile.css';

class Profile extends Component {
  state = {
    editMode: false,
    user: {
        name: 'test user',
        currentCity: 'test city',
        profilePhoto: '',
    },
  };

  componentDidMount() {
    const userId = localStorage.getItem('uid');
    axios.get(
      `${process.env.REACT_APP_API_URL}/users/${userId}`,
      { withCredentials: true}
    ).then((res) => {
      console.log(res);
      this.setState({
        user: res.data.data,
      });
    }).catch((err) => console.log(err));
  }

  toggleEdit = () => {
    console.log('toggle');
  };

  handleSubmit = (updated) => {
    const userId = localStorage.getItem('uid');
    axios.put(
      `${process.env.REACT_APP_API_URL}/users/${userId}/update`,
      updated
    ).then((res) => {
      console.log(res);
    }).catch((err) => console.log(err));
  };

  pictureUploaded =(event)=>{
    console.log(event.originalUrl)
    this.setState({
      user:{profilePhoto: event.originalUrl}
    })
    console.log(this.state.user.profilePhoto)
  }

  fileUploadHandler=(event)=>{
    console.log("button working")
    const photoLink = this.state.user.profilePhoto
    event.preventDefault()
    const userId = localStorage.getItem('uid');
    axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}/update`,{profilePhoto:photoLink}).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="profile">
        <UserInfo
          user={user}
          toggleEdit={this.toggleEdit}
        />
        <ProfileEdit
          user={user}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
          pictureUploaded={this.pictureUploaded}
          fileUploadHandler={this.fileUploadHandler}
        />
        <div className="profile-postlist">
          <Postlist />
        </div>
      </div>
    );
  }
}

export default Profile;
