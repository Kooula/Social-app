import { createContext, useEffect, useState } from "react";
import mergePostData from "../common/helpers/mergePostData";
import axios from "axios";
import shuffleArray from "../common/helpers/shuffleArray";
import paginatePosts from "../common/helpers/paginatePosts";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const fetchPosts = async () => {
    try {
      const [users, postsValue, comments] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/comments"),
      ]);
      const [usersData, postsData, commentsData] = [
        users.data,
        postsValue.data,
        comments.data,
      ];
      updateAllState(usersData, commentsData, postsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const updateAllState = (usersData, commentsData, postsData) => {
    const onlineUsers = usersData.map((user) => ({
      ...user,
      online: user.id % 2 === 0,
    }));
    const mergedData = mergePostData(usersData, commentsData, postsData);
    const shuffledPosts = shuffleArray(mergedData);
    setUsers(onlineUsers);
    setPosts(shuffledPosts);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    paginate(nextPage);
  };

  const addNewPost = (post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  const removePost = (id) => {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== id);
    });
  };

  const getUserById = (userId) => {
    return users.find((user) => user.id === parseInt(userId));
  };

  const getUserPosts = (userId) => {
    return posts.filter((post) => post.userId === parseInt(userId));
  };

  const value = {
    posts: paginatePosts(posts, currentPage, postsPerPage),
    setPosts,
    loading,
    users,
    currentPage,
    postsPerPage,
    paginate,
    addNewPost,
    getUserById,
    getUserPosts,
    handleNextPage,
    removePost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostContext;
