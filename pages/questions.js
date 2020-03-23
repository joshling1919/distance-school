import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import AllQuestions from '../components/questions';

const Questions = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="intro">
        <p>
          <strong>Have a question on what to do for your students?</strong>{' '}
          We're a group of teachers who would love to help, so please feel free
          to <a onClick={() => setVisible(true)}>reach out</a>!
        </p>
        <p>Below is a list of questions we've answered so far.</p>
      </div>
      <hr />
      <AllQuestions />
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
          src="https://docs.google.com/forms/d/e/1FAIpQLSdpWG2wo6022EeMkkKiYdomp9jn6q8n5BWwDpDA6QMyoHOjbQ/viewform?embedded=true"
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

export default Questions;
