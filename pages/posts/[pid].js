import React from 'react';
import PostComponent from '../../components/posts/Post';
import articles from '../../public/data/articles.json';

const Post = ({ article }) => <PostComponent article={article} />;

Post.getInitialProps = async ({ query }) => {
  const article = articles.find(
    ({ id }) => parseInt(id, 10) === parseInt(query.pid, 10)
  );
  return { article };
};

export default Post;
