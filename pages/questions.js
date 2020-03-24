import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Intro from '../components/shared/Intro';
import AllQuestions from '../components/questions';

const Questions = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Intro>
        <p>
          <strong>Have a question on what to do for your students?</strong>{' '}
          We're a group of teachers who would love to help, so please feel free
          to reach out:
        </p>
        <div className="ask-button-container">
          <Button size="large" type="primary" onClick={() => setVisible(true)}>
            Ask a question
          </Button>
        </div>
        <p>Below is a list of questions we've answered so far.</p>
      </Intro>
      <AllQuestions />
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
          src="https://docs.google.com/forms/d/e/1FAIpQLSdpWG2wo6022EeMkkKiYdomp9jn6q8n5BWwDpDA6QMyoHOjbQ/viewform?embedded=true"
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

export default Questions;
