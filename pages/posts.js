import React from 'react';
import PostsComponent from '../components/posts';
import axios from 'axios';

const Posts = ({ posts }) => <PostsComponent posts={posts} />;

Posts.getInitialProps = async () => {
  const { data } = await axios(
    'https://distance-school-server.herokuapp.com/articles'
  );
  return { posts: data };
};

export default Posts;
