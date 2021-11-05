import React from 'react';

const PostsListCard = ({ title, author, posted }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{posted}</div>
    </div>
  );
};

export default PostsListCard;
