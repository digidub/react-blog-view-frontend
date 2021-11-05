import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
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

  return <Fragment>{posts && listOfPosts()}</Fragment>;
};

export default PostsList;
