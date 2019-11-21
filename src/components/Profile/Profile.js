import React, { Component } from 'react';
import axios from 'axios';

// import UserInfo from './UserInfo/UserInfo';
import Postlist from './Postlist/Postlist';
import './Profile.css';

class Profile extends Component {
  state = {
    user: {
        name: 'test user',
        currentCity: 'test city',
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

  render() {
    const { user } = this.state;
    return (
      <div className="profile">
        <div className="profile-user-info">
          <img src={user.profilePhoto} alt={user.name} />
          <h2>{user.name}</h2>
          <h3 className="profile-user-city">{user.currentCity}</h3>
        </div>
        <div className="profile-postlist">
          <Postlist />
        </div>
      </div>
    );
  }
}

export default Profile;
