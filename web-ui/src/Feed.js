
import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

function Post({post}) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={post.photo_path} />
        <Card.Text>
          Posted by {post.user.name}
          {post.body}
        </Card.Text>
      </Card>
    </Col>
  );
}

function Feed({posts}) {
  let cards = posts.map((post) => <Post post={post} />);
  return (
    <Row>
      { cards }
    </Row>
  );
}

export default connect(({posts}) => ({posts}))(Feed);
