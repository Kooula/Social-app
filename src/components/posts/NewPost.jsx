import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import { INIT_STATE_POST } from "../../constants/InitialStates";
import "./NewPost.css";
import { v4 as uuidv4 } from "uuid";
import PostContext from "../../context/PostsContext";
import UserIcons from "../user-info/UserIcons";

const NewPost = ({ styleType, isModal, closeModal }) => {
  const { formData, onInputChange, resetForm, isSubmitDisabled } =
    useForm(INIT_STATE_POST);
  const { addNewPost } = useContext(PostContext);

  const onSubmitPost = (e) => {
    e.preventDefault();
    const tempPost = {
      ...formData,
      comments: [],
      user: [{ name: "Ivan Ivanic", username: "Ivko" }],
      id: uuidv4(),
    };
    addNewPost(tempPost);
    resetForm();
    if (isModal) {
      closeModal();
    }
  };

  return (
    <div
      className={`newPost ${
        styleType === "myModal" ? "myModalStyle" : "homePageStyle"
      }`}
    >
      <form className={`newPostForm ${styleType}`}>
        <div className={`newPostUser ${styleType}`}>
          <h3>Tell something to the world</h3>
        </div>
        <UserIcons user={"Koula"} />
        <div className={`newPostInfo ${styleType}`}></div>
        <div className={`newUserInfo ${styleType}`}>
          <div className={`newPostTextarea ${styleType}`}>
            <textarea
              placeholder="What's going on !?"
              name="body"
              value={formData.body}
              onChange={onInputChange}
            />
          </div>
        </div>
        <button
          onClick={onSubmitPost}
          className={`postButton ${isSubmitDisabled() ? "disabled" : ""}`}
          disabled={isSubmitDisabled()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
