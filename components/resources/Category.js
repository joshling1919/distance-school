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
    <Row gutter={32} justify="center">
      {items.map(resource => (
        <Col key={resource.title} sm={24} md={12} style={{ marginBottom: 60 }}>
          <ResourceCard {...resource} openModal={openModal} />
        </Col>
      ))}
    </Row>
    <style jsx>{`
      h1 {
        margin-bottom: 20px;
      }
    `}</style>
  </div>
);
