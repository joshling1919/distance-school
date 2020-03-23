import { Row, Col, Card, Avatar } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Router from 'next/router';

export default ({ posts }) => (
  <Row gutter={32} justify="center">
    {posts.map(post => (
      <Col key={post.title} span={24} style={{ marginBottom: 60 }}>
        <Card
          style={{ margin: '0 auto' }}
          actions={[
            <div onClick={() => Router.push(`/posts/${post.id}`)}>
              <div>Read</div>
              <EllipsisOutlined key="read-more" />
            </div>,
          ]}
        >
          <Card.Meta
            style={{
              marginBottom: 20,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
            avatar={
              <Avatar
                size="large"
                src={`https://distance-school-server.herokuapp.com${post.user.avatar[0].url}`}
              />
            }
            title={post.title}
            description={`by ${post.user.fullname}`}
          ></Card.Meta>
          <p>
            <i>{post.blurb}</i>
          </p>
        </Card>
      </Col>
    ))}
  </Row>
);
