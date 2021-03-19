
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react'

import { create_post } from '../api';

export default function PostsNew() {
  let [post, setPost] = useState({});

  function onSubmit(ev) {
    ev.preventDefault();
    console.log(ev);
    console.log(post);
    create_post(post);
  }

  function updatePhoto(ev) {
    let p1 = Object.assign({}, post);
    p1["photo"] = ev.target.files[0];
    setPost(p1);
  }

  function updateBody(ev) {
    let p1 = Object.assign({}, post);
    p1["body"] = ev.target.value;
    setPost(p1);
  }

  // Note: File input can't be a controlled input.
  return (
    <Row>
      <Col>
        <h2>New Post</h2>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" onChange={updatePhoto} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea"
                          rows={4}
                          onChange={updateBody}
                          value={post.body} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
