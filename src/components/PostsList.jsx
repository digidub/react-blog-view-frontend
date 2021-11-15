import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Server } from '../tools/services';
import PostsListCard from './PostsListCard';

const PostsList = () => {
  const [posts, setPosts] = useState(null);
  const url = '/posts';

  useEffect(() => {
    Server.fetchAll(url).then((data) => {
      console.log(data);
      setPosts(data);
    });
  }, []);

  const listOfPosts = () =>
    posts.map((post) => (
      <PostsListCard
        key={post._id}
        title={post.title}
        author={post.author.username}
        posted={post.datePosted}
      />
    ));

  return <PostsTable>{posts && listOfPosts()}</PostsTable>;
};

export default PostsList;

const PostsTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
