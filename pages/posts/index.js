import React from 'react';
import PostsComponent from '../../components/posts';
import axios from 'axios';

const Posts = ({ posts }) => (
  <div>
    <div className="intro">
      <p>This page features thoughts and ideas from educators.</p>
      <p>
        If you have any thoughts or ideas (halfbaked, fullbaked, effective, or
        valiantly effortful) around how we can support struggling students
        during this time, please reach out! We would love to hear about them!
      </p>
    </div>
    <hr />
    <PostsComponent posts={posts} />
    <style jsx>{`
      .intro {
        margin-bottom: 30px;
      }
      hr {
        margin-bottom: 30px;
      }
    `}</style>
  </div>
);

Posts.getInitialProps = async () => {
  const { data } = await axios(
    'https://distance-school-server.herokuapp.com/articles'
  );
  return { posts: data };
};

export default Posts;
