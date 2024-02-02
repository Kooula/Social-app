import React, { useContext } from "react";
import PostContext from "../../../context/PostsContext";
import "./Sidebar.css";
import UserIcons from "../../user-info/UserIcons";
import Searchbar from "../search-bar/Searchbar";

const Sidebar = () => {
  const { users } = useContext(PostContext);

  return (
    <div className="side-feed">
      <Searchbar />
      <div className="trending">
        <h1 className="h1-title">Friends activity</h1>
        {users.map((user) =>
          user.online ? (
            <div className="trending-item" key={user.id}>
              <UserIcons user={user} />
              <span>10 posts</span>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Sidebar;
