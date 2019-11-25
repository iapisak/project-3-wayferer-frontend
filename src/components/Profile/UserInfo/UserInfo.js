import React from 'react';
import { Widget } from "@uploadcare/react-widget";

const UserInfo = ({ user, toggleEdit, pictureUploaded, }) => (
    <div className="profile-user-info">
      <div className="image-profile-container">
        <img src={user.profilePhoto} alt={user.name} />
        <Widget publicKey="38e56a09985595f94b66" onChange={pictureUploaded} type="file" placeholder='text' />
        <button className="btn btn-primary" onClick={toggleEdit}>Edit profile</button>
      </div>
      <div>
        <h4 className="card-text">Welcome, {user.name}!</h4>
        <h5 className="card-text">{user.currentCity}</h5>
      </div>
    </div>
);

export default UserInfo;
