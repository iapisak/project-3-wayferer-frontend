import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import UserInfo from './UserInfo/UserInfo';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import Postlist from './Postlist/Postlist';
import './Profile.css';

class Profile extends Component {
  state = {
    editMode: false,
    ajaxLoaded: false,
    displayComponent: false,
    user: {
        name: 'test user',
        currentCity: 'test city',
        profilePhoto: '',
    },
  };

  fetchUserInfo = () => {
    const profileUserSlug = this.props.location.pathname.split('/')[2];
    axios.get(
      `${process.env.REACT_APP_API_URL}/users/${profileUserSlug}`,
      { withCredentials: true}
    ).then((res) => {
      this.setState({
        user: res.data.data,
        ajaxLoaded: true,
      });
    }).catch((err) => console.log(err));
  };

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
        />
      )
    } else {
      return (
        <UserInfo
          user={user}
          toggleEdit={this.toggleEdit}
          pictureUploaded={this.pictureUploaded}
          fileUploadHandler={this.fileUploadHandler}
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
      this.props.history.push(`/users/${updated.name}`)
    }).catch((err) => console.log(err));
  };

  pictureUploaded =(event)=>{
    console.log(event.originalUrl)
    this.setState({
      user:{
        ...this.state.user,
        profilePhoto: event.originalUrl
      },
      editMode: false,
    })
    console.log(this.state.user.profilePhoto)
    const photoLink = this.state.user.profilePhoto
    const userId = localStorage.getItem('uid');
    axios.put(
      `${process.env.REACT_APP_API_URL}/users/${userId}/update`,
      {profilePhoto:photoLink}
    ).then((res)=>{
      window.location.reload();
      // this.props.history.push('/')
    }).catch((err)=>{
      console.log(err)
    });
  }

  componentDidMount() {
    this.fetchUserInfo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.fetchUserInfo();
    }
  }

  render() {
    return (
      <main className="main-home-page">
        <div className="profile-container row">
          {this.displayUserInfo()}
            <Postlist />
        </div>
      </main>
    );
  }
}

export default withRouter(Profile);
