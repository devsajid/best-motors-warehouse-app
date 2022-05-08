import React from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
const Item = ({ item }) => {
  const { _id, name, img, description, price } = item;

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} alt="item-pic" />
            <Card.Title>Name : {name}</Card.Title>
            <Card.Text>shortDes : {description}</Card.Text>
            <Card.Text>Price : ${price}</Card.Text>
            <L
              variant="primary"
              to={`/ItemDetails/${item._id}`}
              class="btn btn-primary"
            >
              Update Item
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
