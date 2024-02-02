import React from "react";
import usePostActions from "../hooks/usePostActions";
import Post from "../components/posts/Post";

const BookmarksPage = () => {
  const { bookmark, onRemoveBookmark } = usePostActions();

  if (bookmark.length === 0) {
    return <p style={{ color: "white" }}>You dont have any bookmarks</p>;
  } else {
    return (
      <div>
        {bookmark.map((bookmark) => (
          <Post
            post={bookmark}
            isBookmarksPage={true}
            onRemoveBookmark={onRemoveBookmark}
          />
        ))}
      </div>
    );
  }
};

export default BookmarksPage;
