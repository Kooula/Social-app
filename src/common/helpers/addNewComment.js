import {v4 as uuidv4} from 'uuid'

function addNewComment (postId, newCommentData, setPosts, setSelectedPost, isOpen){
    const newComment = {
      ...newCommentData,
      id: uuidv4(),
      postId: postId,
    };
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [newComment, ...post.comments] }
          : post
      );
      return updatedPosts;
    });
    if (isOpen) {
      setSelectedPost((prevSelectedPost) => ({
        ...prevSelectedPost,
        comments: [newComment, ...prevSelectedPost.comments],
      }));
    }
} 

export default addNewComment