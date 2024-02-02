import React from "react";
import "./Post.css";
import ActionButton from "../buttons/ActionButton";
import usePostActions from "../../hooks/usePostActions";
import Comments from "../comments/Comments";
import UserIcons from "../user-info/UserIcons";
import useForm from "../../hooks/useForm";
import { INIT_STATE_COMMENT } from "../../constants/InitialStates";
import addNewComment from "../../common/helpers/addNewComment";
import NewComment from "../comments/NewComment";
import useDropdown from "../../hooks/useDropdown";
import useToastMessages from "../../hooks/useToastMessages";

const Post = ({
  post,
  initialShowComments,
  initialCommentsNumber,
  setSelectedPost,
  isOpen,
  setPosts,
  isBookmarksPage,
  onRemoveBookmark,
  openModal,
  removePost,
}) => {
  const {
    showComments,
    visibleComments,
    onOpenComments,
    onMoreCommentsClick,
    onLessCommentsClick,
    onAddBookmark,
    like,
    onLikeClick,
  } = usePostActions(initialShowComments, initialCommentsNumber);
  const { formData, onInputChange, resetForm, isSubmitDisabled } =
    useForm(INIT_STATE_COMMENT);
  const { showDropdown, setShowDropdown} = useDropdown();
  const { onReportClickToast, ToastText, onBookMarkClickToast } =
    useToastMessages();

  const onAddComment = (postId) => {
    const body = formData.body;
    const email = formData.email;
    const newComment = {
      body: body,
      email: email,
    };
    addNewComment(postId, newComment, setPosts, setSelectedPost, isOpen);
    resetForm();
  };

  const onMoreCommentsOpenModal = () => {
    onMoreCommentsClick();
    if (visibleComments >= 4) {
      openModal(post);
    }
  };

  return (
    <div className="feed-tweet">
      <div className="feed-tweet-details">
        <div className="tweeter-details">
          <UserIcons user={post.user[0]} />
          <span className="tweeter-handle">@{post.user[0].username}</span>
        </div>
        <div className="actions">
          <div
            onClick={() =>
              setShowDropdown((prevShowDropdown) => !prevShowDropdown)
            }
            className="menuOptions"
          >
            ...
          </div>
          {showDropdown && (
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={onReportClickToast}>
                Report
              </div>
              <div
                className="dropdown-item"
                onClick={() => removePost(post.id)}
              >
                Delete
              </div>
            </div>
          )}
        </div>
        <div className="tweet-text">
          <p>{post.body}</p>
        </div>
        <div className="tweet-icons">
          <ActionButton
            label={"Like"}
            hoverColor="rgba(216, 78, 78, 0.2)"
            isActive={like}
            onClick={onLikeClick}
          />
          <ActionButton
            label={"Comment"}
            hoverColor="rgba(114, 236, 155, 0.2)"
            isActive={showComments}
            onClick={() => onOpenComments()}
          />
          <ActionButton
            label={isBookmarksPage ? "Delete" : "Bookmark"}
            hoverColor={
              isBookmarksPage
                ? "rgba(255, 0, 0, 0.2)"
                : "rgba(39, 67, 224, 0.2)"
            }
            onClick={() => {
              if (isBookmarksPage) {
                onRemoveBookmark(post.id);
              } else {
                onAddBookmark(post);
                onBookMarkClickToast();
              }
            }}
          />
        </div>
      </div>
      {showComments && (
        <>
          <NewComment
            formData={formData}
            post={post}
            onInputChange={onInputChange}
            onAddComment={onAddComment}
            isSubmitDisabled={isSubmitDisabled}
          />
          {visibleComments > 3 && (
            <div
              className="show-comments"
              onClick={() => onLessCommentsClick()}
            >
              Show Less Comments
            </div>
          )}
          <div className="comments-container">
            {post.comments.slice(0, visibleComments).map((comment) => (
              <Comments
                body={comment.body}
                email={comment.email}
                key={comment.id}
              />
            ))}
            {visibleComments < post.comments.length && (
              <div
                className="show-comments"
                onClick={() => onMoreCommentsOpenModal()}
              >
                Load More Comments
              </div>
            )}
            {post.comments.length < 1 && (
              <p className="no-comments">There is no comments.</p>
            )}
          </div>
        </>
      )}
      {ToastText}
    </div>
  );
};

export default Post;
