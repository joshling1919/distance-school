import React from 'react';
import ResourceCard from './ResourceCard';
import { Col, Row } from 'antd';

export default ({ items, category, openModal }) => (
  <div className="site-card-wrapper">
    <h1>{category}</h1>
    <Row gutter={16} justify="center">
      {items.map(resource => (
        <Col key={resource.title} sm={24} md={12} style={{ marginBottom: 40 }}>
          <ResourceCard {...resource} openModal={openModal} />
        </Col>
      ))}
    </Row>
  </div>
);
