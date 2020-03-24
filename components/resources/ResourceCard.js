import React from 'react';
import { Card, Avatar } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

export default ({ logo, title, description, detailKey, openModal }) => (
  <Card
    style={{ margin: '0 auto' }}
    actions={[
      <div onClick={() => openModal(detailKey)}>
        <MoreOutlined key={`more-info-${title}`} />
        <div>More Info</div>
      </div>,
    ]}
  >
    <Card.Meta
      style={{
        height: 180,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        marginTop: 15,
      }}
      avatar={<Avatar src={logo} />}
      title={title}
      description={description}
    />
  </Card>
);
