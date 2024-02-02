function mergePostData(usersData, commentsData, postsData) {
  const lookupUser = usersData.reduce((acc, user) => {
    acc[user.id] = acc[user.id] ? [...acc[user.id], user] : [user];
    return acc;
  }, {});

  const lookupComments = commentsData.reduce((acc, comment) => {
    const postId = comment.postId;
    acc[postId] = acc[postId] ? [...acc[postId], comment] : [comment];
    return acc;
  }, {});

  const lookupPosts = postsData.map((post) => ({
    ...post,
    user: lookupUser[post.userId],
    comments: lookupComments[post.id] || [],
  }));

  return lookupPosts;
}

export default mergePostData;
