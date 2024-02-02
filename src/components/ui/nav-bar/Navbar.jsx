import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import NewPost from "../../posts/NewPost";
import Searchbar from "../search-bar/Searchbar";
import useDropdown from "../../../hooks/useDropdown";

const Navbar = ({ openModal, onRedirectCloseModal, closeModal }) => {
  const { showDropdown, setShowDropdown} = useDropdown();
  const navigate = useNavigate();

  const onRedirect = () => {
    window.scrollTo(0, 0);
  };

  const onLogout = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="nav-links">
        <Link to="/home" className="icons-outlined" onClick={onRedirect}>
          <img
            src="/assets/bird-line-art-logo-design-template-vector.jpg"
            alt="Clucker Logo"
          />
          <h2>Clucker</h2>
        </Link>
        <Link to="/home" className="icons-outlined" onClick={onRedirect}>
          <img
            src="/assets/house-home-icon-design-collection-260nw-1310539238.png"
            alt="Home Icon"
          />
          <span>Home</span>
        </Link>
        <div
          className="icons-outlined"
          onClick={() =>
            openModal(
              <Searchbar
                isModal={"isModal"}
                onRedirectCloseModal={onRedirectCloseModal}
              />
            )
          }
        >
          <img
            src="/assets/white-magnifying-glass-icon-isolated-260nw-1573346785.png"
            alt="Find Icon"
          />
          <span>Find</span>
        </div>
        <Link to="" className="icons-outlined">
          <img
            src="/assets/pngtree-vector-notification-icon-png-image_947091.jpg"
            alt="Notifications Icon"
          />
          <span>Notifications</span>
        </Link>
        <Link to="" className="icons-outlined">
          <img
            src="/assets/envelope-icon-vector-illustration.jpg"
            alt="Messages Icon"
          />
          <span>Messages</span>
        </Link>
        <Link to="/bookmarks" className="icons-outlined" onClick={onRedirect}>
          <img src="/assets/bookmark.png" alt="Bookmarks Icon" />
          <span>Bookmarks</span>
        </Link>
        <button
          className="newPostButton"
          onClick={() =>
            openModal(
              <NewPost
                closeModal={closeModal}
                isModal={true}
                styleType={"myModal"}
              />
            )
          }
        >
          Post
        </button>
        <div className="main-account">
          <Link to="">
            <img
              className="tweet-img"
              src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
              alt="User Avatar"
            />
            <div className="account-details">
              <span className="account-name">Ivan Ivanić</span>
              <span className="account-handle">@IvanKoo</span>
            </div>
            <div
              className="menuOptions"
              onClick={() =>
                setShowDropdown((prevShowDropdown) => !prevShowDropdown)
              }
            >
              ...
            </div>
          </Link>
          {showDropdown && (
            <div className="logout-dropdown">
              <div className="logout-item" onClick={onLogout}>
                Log out
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
