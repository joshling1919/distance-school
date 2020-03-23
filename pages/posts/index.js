import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PostsComponent from '../../components/posts';
import axios from 'axios';

const Posts = ({ posts }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="intro">
        <p>This page features thoughts and ideas from educators.</p>
        <p>
          We'd love to collaborate with you. If you'd like to share what you've
          been doing or share any thoughts you have, please{' '}
          <a onClick={() => setVisible(true)}>reach out</a>!
        </p>
      </div>
      <hr />
      <PostsComponent posts={posts} />
      <Modal
        bodyStyle={{ height: '90vh' }}
        centered={true}
        width="90%"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setVisible(false)}>
            Close
          </Button>,
        ]}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdHWD8v--snzpdO6bPvtsrkHpvo5UBgDgoHm-njNPXogMrlmg/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Modal>
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
};

Posts.getInitialProps = async () => {
  const { data } = await axios(
    'https://distance-school-server.herokuapp.com/articles'
  );
  return { posts: data };
};

export default Posts;
