import React, { useContext, useState } from "react";
import "./Searchbar.css";
import useDropdown from "../../../hooks/useDropdown";
import PostContext from "../../../context/PostsContext";
import useForm from "../../../hooks/useForm";
import { INIT_STATE_SEARCH } from "../../../constants/InitialStates";
import UserIcons from "../../user-info/UserIcons";

const Searchbar = ({ isModal, onRedirectCloseModal }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { openDropdown, showDropdown, closeDropdown } = useDropdown();
  const { formData, onInputChange, resetForm } = useForm(INIT_STATE_SEARCH);
  const { users } = useContext(PostContext);

  const filterUsers = (searchTerm) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );
    setFilteredUsers(filtered);
  };

  const onBlur = (event) => {
    if (!event.relatedTarget) {
      closeDropdown();
    }
  };

  const onSearchReset = () => {
    resetForm();
    closeDropdown();
  };

  return (
    <div className={`search ${isModal ? "modal-search" : ""}`}>
      <input
        type="text"
        name="search"
        value={formData.search}
        onChange={(e) => {
          onInputChange(e);
          filterUsers(e.target.value.toLowerCase());
        }}
        onFocus={() => {
          openDropdown();
        }}
        onBlur={onBlur}
        placeholder="Search for someone"
      />
      {formData.search && (
        <button className="closeButton" onClick={onSearchReset}>
          &times;
        </button>
      )}
      {showDropdown && (
        <div className={`search-dropdown ${isModal ? "modal-dropdown" : ""}`}>
          {filteredUsers.map((user) => (
            <div className="search-result" key={user.id}>
              <UserIcons
                user={user}
                closeDropdown={closeDropdown}
                onRedirectCloseModal={onRedirectCloseModal}
                isModal={true}
                showDropdown={showDropdown}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
