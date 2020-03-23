import React from 'react';
import { Typography, Divider, Avatar } from 'antd';
import ReactMarkdown from 'react-markdown';

function Image(props) {
  let src = props.src;
  if (src.startsWith('/')) {
    src = `https://distance-school-server.herokuapp.com${src}`;
  }
  return (
    <img
      {...props}
      src={src}
      style={{ maxWidth: '100%', border: '1px solid gray' }}
    />
  );
}

export default ({ article }) => (
  <Typography>
    <div>
      <a href="/posts">Back to all posts</a>
    </div>
    <h2>{article.title}</h2>
    <div className="author-container">
      <Avatar
        size="large"
        src={`https://distance-school-server.herokuapp.com${article.user.avatar[0].url}`}
      />{' '}
      <span>{article.user.fullname}</span>
    </div>
    <Divider />
    <div>
      <ReactMarkdown source={article.content} renderers={{ image: Image }} />
    </div>
    <Divider />
    <style jsx>{`
      span {
        margin-left: 10px;
      }
      .author-container {
        margin-left: 15px;
        display: flex;
        align-items: center;
      }
    `}</style>
  </Typography>
);
