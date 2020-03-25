import { Row, Col, Card, Avatar } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import urlSlug from 'url-slug';
import Router from 'next/router';

export default ({ posts }) => (
  <Row gutter={32} justify="center">
    {posts.map(post => (
      <Col key={post.title} span={24} style={{ marginBottom: 60 }}>
        <Card
          style={{ margin: '0 auto' }}
          actions={[
            <a href={`/posts/${urlSlug(post.title)}`}>
              <div>Read</div>
              <EllipsisOutlined key="read-more" />
            </a>,
          ]}
        >
          <Card.Meta
            style={{
              marginBottom: 20,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
            avatar={<Avatar size={60} src={post.user.avatar[0].url} />}
            title={post.title}
            description={`by ${post.user.fullname}`}
          ></Card.Meta>
          <p className="blurb">{post.blurb}</p>
        </Card>
      </Col>
    ))}
    <style jsx>
      {`
        .blurb {
          margin: 30px 15px 10px;
        }
      `}
    </style>
  </Row>
);
