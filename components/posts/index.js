import React from 'react';
import { Typography, Divider } from 'antd';
import ReactMarkdown from 'react-markdown';

function Image(props) {
  let src = props.src;
  if (src.startsWith('/')) {
    src = `${process.env.STRAPI_ENDPOINT}${src}`;
  }
  return (
    <img
      {...props}
      src={src}
      style={{ maxWidth: '100%', border: '1px solid gray' }}
    />
  );
}

const Post = ({ article }) => (
  <div>
    <h2>{article.title}</h2>
    <div className="uk-container uk-container-small">
      <ReactMarkdown source={article.content} renderers={{ image: Image }} />
    </div>
  </div>
);

export default ({ posts }) => (
  <Typography>
    {posts.map(article => (
      <Post article={article} />
    ))}
    <Divider />
  </Typography>
);
