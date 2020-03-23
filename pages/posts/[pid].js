import React from 'react';
import PostComponent from '../../components/posts/Post';
import axios from 'axios';

const Post = ({ article }) => <PostComponent article={article} />;

Post.getInitialProps = async ({ query }) => {
  const { data } = await axios(
    `https://distance-school-server.herokuapp.com/articles/${query.pid}`
  );
  return { article: data };
};

export default Post;
