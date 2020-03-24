import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Intro from '../../components/shared/Intro';
import PostsComponent from '../../components/posts';
import articles from '../../public/data/articles.json';

const Posts = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Intro>
        <p>This page features thoughts and ideas from educators.</p>
        <p>
          We'd love to collaborate with you. If you'd like to share what you've
          been doing or share any thoughts you have, please reach out:
        </p>
        <div className="ask-button-container">
          <Button size="large" type="primary" onClick={() => setVisible(true)}>
            Share your thoughts
          </Button>
        </div>
      </Intro>
      <PostsComponent posts={articles} />
      <Modal
        bodyStyle={{ height: '90vh' }}
        centered={true}
        width="90%"
        style={{ maxWidth: 960 }}
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
        .ask-button-container {
          margin-top: 20px;
          margin-bottom: 50px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Posts;
