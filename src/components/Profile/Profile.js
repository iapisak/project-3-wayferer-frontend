import React, { Component } from 'react';
import axios from 'axios';
import { Widget } from "@uploadcare/react-widget";
// import UserInfo from './UserInfo/UserInfo';
import Postlist from './Postlist/Postlist';
import './Profile.css';

class Profile extends Component {
  state = {
    user: {
        name: 'test user',
        currentCity: 'test city',
        profilePhoto: ''
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
    axios.put(`${process.env.REACT_APP_API_URL}/users/update/${userId}`,{profilePhoto:photoLink}).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  render() {
    const { user } = this.state;
    return (
      <div className="profile">
        <div className="profile-user-info">
          <img src={user.profilePhoto} alt={user.name} />
          <h2>{user.name}</h2>
          <h3 className="profile-user-city">{user.currentCity}</h3>
          <Widget publicKey="38e56a09985595f94b66" onChange={this.pictureUploaded} type="file"/>
          <button onClick={this.fileUploadHandler}>Submit</button>
        </div>
        <div className="profile-postlist">
          <Postlist />
        </div>
      </div>
    );
  }
}

export default Profile;
