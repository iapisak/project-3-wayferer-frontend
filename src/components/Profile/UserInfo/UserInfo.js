import React from 'react';
import { Widget } from "@uploadcare/react-widget";

const UserInfo = ({ user, toggleEdit, pictureUploaded, }) => (
    <div class="profile-user-info">
      <div class="image-profile-container">
        <img src={user.profilePhoto} alt={user.name} />
        <Widget publicKey="38e56a09985595f94b66" onChange={pictureUploaded} type="file" placeholder='text' />
        <button className="btn btn-primary" onClick={toggleEdit}>Edit profile</button>
      </div>
      <div>
        <p class="card-text"><h4>Welcome, {user.name}!</h4></p>
        <p class="card-text"><h5>{user.currentCity}</h5></p>
      </div>
    </div>
);

export default UserInfo;
