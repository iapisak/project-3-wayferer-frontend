import React from 'react';

const UserInfo = ({ user, toggleEdit }) => (
  <div className="profile-user-info">
  <img src={user.profilePhoto} alt={user.name} />
  <h2>{user.name}</h2>
  <h3 className="profile-user-city">{user.currentCity}</h3>
  <button className="btn btn-primary" onClick={toggleEdit}>Edit</button>
</div>
);

export default UserInfo;
