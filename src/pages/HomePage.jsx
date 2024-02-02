import React, { useContext, useState } from "react";
import PostContext from "../context/PostsContext";
import Modal from "../components/modals/Modal";
import useModal from "../hooks/useModal";
import Post from "../components/posts/Post";
import NewPost from "../components/posts/NewPost";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const HomePage = () => {
  const [selectedPost, setSelectedPost] = useState([]);
  const { loading, posts, handleNextPage, setPosts, removePost } =
    useContext(PostContext);
  const { openModal, closeModal, isOpen } = useModal();

  const onModalOpen = (content) => {
    openModal();
    setSelectedPost(content);
  };
  useInfiniteScroll(handleNextPage);

  return (
    <div>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div>
          <NewPost styleType={"homePageStyle"} />
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              initialShowComments={false}
              initialCommentsNumber={2}
              openModal={() => onModalOpen(post)}
              isOpen={isOpen}
              setPosts={setPosts}
              isBookmarksPage={false}
              removePost={removePost}
            />
          ))}
        </div>
      )}
      {selectedPost && (
        <Modal closeModal={closeModal} isOpen={isOpen}>
          <Post
            isModal={true}
            post={selectedPost}
            isOpen={isOpen}
            removePost={removePost}
            setSelectedPost={setSelectedPost}
            setPosts={setPosts}
            initialShowComments={true}
            initialCommentsNumber={
              selectedPost.comments ? selectedPost.comments.max : 0
            }
          />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
