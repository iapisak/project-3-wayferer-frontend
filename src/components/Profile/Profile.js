import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo/UserInfo';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import Postlist from './Postlist/Postlist';
import './Profile.css';

class Profile extends Component {
  state = {
    editMode: false,
    ajaxLoaded: false,
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
        ajaxLoaded: true,
      });
    }).catch((err) => console.log(err));
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode,
    }));
  };

  displayUserInfo = () => {
    const { ajaxLoaded, editMode, user } = this.state;
    if (!ajaxLoaded) {
      return null;
    }
    if (editMode) {
      return (
        <ProfileEdit
          user={user}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
          pictureUploaded={this.pictureUploaded}
          fileUploadHandler={this.fileUploadHandler}
        />
      )
    } else {
      return (
        <UserInfo
          user={user}
          toggleEdit={this.toggleEdit}
        />
      );
    }
  };

  handleSubmit = (updated) => {
    this.toggleEdit();
    const {profilePhoto} = this.state.user
    const newUser = {...updated,profilePhoto}
    this.setState({user:newUser})

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
        {this.displayUserInfo()}
        <div className="profile-postlist">
          <Postlist />
        </div>
      </div>
    );
  }
}

export default Profile;
