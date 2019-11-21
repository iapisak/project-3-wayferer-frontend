import React from 'react';

const UserInfo = ({ user }) => (
  <div className="profile-user-info">
    <h2>{user.username}</h2>
    <h3>{user.currentCity}</h3>
  </div>
);

export default UserInfo;
