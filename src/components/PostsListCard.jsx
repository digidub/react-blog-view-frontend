import React from 'react';
import styled from 'styled-components';

const PostsListCard = ({ title, author, posted }) => {
  return (
    <div>
      <CardHeader>
        <div>{title}</div>
        <div>{author}</div>
      </CardHeader>
      <div>{posted}</div>
    </div>
  );
};

export default PostsListCard;

const CardHeader = styled.div`
  display: flex;
`;
