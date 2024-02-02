import React from "react";
import { Link } from "react-router-dom";
import "./UserIcons.css";

const UserIcons = ({
  user,
  closeDropdown,
  showDropdown,
  onRedirectCloseModal,
  isModal,
}) => {
  const onRedirect = () => {
    window.scrollTo(0, 0);
    if (showDropdown) {
      closeDropdown();
    }
    if (isModal) {
      onRedirectCloseModal();
    }
  };

  const userIcon =
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg";
  return (
    <div className="container-online">
      <div className="users">
        <Link
          to={`/profile/${user.id}`}
          style={{
            textDecoration: "none",
            display: "flex",
            color: "white",
          }}
          replace
          onClick={onRedirect}
        >
          <img src={userIcon} alt={user.name} />
          <div className="tweeter-name">{user.name}</div>
        </Link>
      </div>
    </div>
  );
};

export default UserIcons;
