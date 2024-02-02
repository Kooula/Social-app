import { useState } from "react";

function usePostActions(initialShowComments, initialCommentsNumber) {
  const [like, setLike] = useState(false);
  const [commentsState, setCommentsState] = useState({
    showComments: initialShowComments,
    commentsNumber: initialCommentsNumber,
  });

  const [bookmark, setBookmark] = useState(() => {
    const storedData = localStorage.getItem("bookmarkData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const onLikeClick = () => {
    setLike(!like);
  };

  const onOpenComments = () => {
    setCommentsState((prev) => ({
      ...prev,
      showComments: !prev.showComments,
    }));
  };

  const onMoreCommentsClick = () => {
    setCommentsState((prev) => ({
      ...prev,
      commentsNumber: prev.commentsNumber + 2,
    }));
  };

  const onLessCommentsClick = () => {
    setCommentsState((prev) => ({
      ...prev,
      commentsNumber: prev.commentsNumber - 2,
    }));
  };

  const onAddBookmark = (post) => {
    const existingBookmarks =
      JSON.parse(localStorage.getItem("bookmarkData")) || [];
    if (
      !existingBookmarks.some((bookmarkedPost) => bookmarkedPost.id === post.id)
    ) {
      const updatedBookmarks = [...existingBookmarks, post];
      localStorage.setItem("bookmarkData", JSON.stringify(updatedBookmarks));
      setBookmark(updatedBookmarks);
    }
  };

  const onRemoveBookmark = (postId) => {
    const existingBookmarks =
      JSON.parse(localStorage.getItem("bookmarkData")) || [];
    const updatedBookmarks = existingBookmarks.filter(
      (bookmarkedPost) => bookmarkedPost.id !== postId
    );
    localStorage.setItem("bookmarkData", JSON.stringify(updatedBookmarks));
    setBookmark(updatedBookmarks);
  };

  return {
    like,
    showComments: commentsState.showComments,
    visibleComments: commentsState.commentsNumber,
    onLikeClick,
    onOpenComments,
    onMoreCommentsClick,
    setCommentsState,
    onAddBookmark,
    bookmark,
    onRemoveBookmark,
    onLessCommentsClick,
  };
}

export default usePostActions;
