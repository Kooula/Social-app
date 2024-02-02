import React, { useContext } from "react";
import PostContext from "../context/PostsContext";
import { useParams } from "react-router-dom";
import ProfileInfo from "../components/user-info/ProfileInfo";
import Post from "../components/posts/Post";

const ProfilePage = () => {
  const { getUserPosts, getUserById, setPosts, removePost } =
    useContext(PostContext);
  const params = useParams();
  const userId = params.id;
  const displayedUserPosts = getUserPosts(userId);
  console.log(displayedUserPosts);
  const displayedUser = getUserById(userId);

  return (
    <div style={{ color: "white" }}>
      <div>
        <ProfileInfo displayedUser={displayedUser} />
        {displayedUserPosts.map((post) => (
          <Post
            post={post}
            key={post.id}
            removePost={removePost}
            setPosts={setPosts}
            initialShowComments={false}
            initialCommentsNumber={2}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
