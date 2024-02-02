import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = ({ displayedUser }) => {
  return (
    <div className="profileData">
      <div className="images">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          className="coverPic"
        />
        <div className="profileContainer">
          <div className="profilePicContainer">
            <img
              src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
              className="profilePic"
            />
          </div>
          <div className="userName">{displayedUser.name}</div>
        </div>
      </div>
      <div className="info">
        <div className="item">City: {displayedUser.address.city}</div>
        <div className="item">Website: {displayedUser.website}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
