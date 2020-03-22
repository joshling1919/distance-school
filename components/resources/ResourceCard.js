import React from 'react';
import { Card, Avatar } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export default ({ logo, title, description }) => (
  <Card
    style={{ margin: '0 auto' }}
    actions={[
      <React.Fragment>
        <InfoCircleOutlined key="info" />
        More Info
      </React.Fragment>,
    ]}
  >
    <Card.Meta
      style={{ height: 150, textOverflow: 'ellipsis', overflow: 'hidden' }}
      avatar={<Avatar src={logo} />}
      title={title}
      description={description}
    />
  </Card>
);
