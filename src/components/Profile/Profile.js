import React, { Component } from 'react';

import UserInfo from './UserInfo/UserInfo';
import Postlist from './Postlist/Postlist';

const testUser = {
  username: 'coolkid',
  currentCity: 'margaritaville',
}

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <UserInfo user={testUser} />
        <Postlist />
      </div>
    );
  }
}

export default Profile;
