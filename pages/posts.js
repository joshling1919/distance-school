import React from 'react';
import PostsComponent from '../components/posts';
import axios from 'axios';

const Posts = ({ posts }) => <PostsComponent posts={posts} />;

Posts.getInitialProps = async () => {
  const { data } = await axios(`${process.env.STRAPI_ENDPOINT}/articles`);
  return { posts: data };
};

export default Posts;
