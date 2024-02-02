function paginatePosts(existingItems, currentPage, postsPerPage) {
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentItems = existingItems.slice(0, startIndex);
  const nextPageItems = existingItems.slice(startIndex, startIndex + postsPerPage );

  return [...currentItems, ...nextPageItems];
}

export default paginatePosts;