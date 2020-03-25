import React from 'react';
import urlSlug from 'url-slug';
import PostComponent from '../../components/posts/Post';
import articles from '../../public/data/articles.json';

const Post = ({ article }) => <PostComponent article={article} />;

Post.getInitialProps = async ({ query }) => {
  const article = articles.find(({ id, title }) => {
    return (
      parseInt(id, 10) === parseInt(query.pid, 10) ||
      urlSlug(title) === query.pid
    );
  });

  return { article };
};

export default Post;
