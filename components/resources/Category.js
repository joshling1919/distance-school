import React from 'react';
import ResourceCard from './ResourceCard';
import { Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { colors } from '../../theme';

export default ({ items, category, categoryDescription, openModal }) => (
  <div className="site-card-wrapper">
    <h1>
      {category}{' '}
      <Tooltip title={categoryDescription} placement="rightTop">
        <InfoCircleOutlined
          style={{ fontSize: '16px', color: colors.infoBlue }}
        />
      </Tooltip>
    </h1>
    <Row gutter={16} justify="center">
      {items.map(resource => (
        <Col key={resource.title} sm={24} md={12} style={{ marginBottom: 40 }}>
          <ResourceCard {...resource} openModal={openModal} />
        </Col>
      ))}
    </Row>
  </div>
);
