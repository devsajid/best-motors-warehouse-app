import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Item = ({ item }) => {
  const { _id, name, img, description, price } = item;
  // const navigate = useNavigate();
  // const navigateToItems = (id) => {
  //   navigate(`/ItemDetails/${id}`);
  // };
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} alt="item-pic" />
            <Card.Title>Name : {name}</Card.Title>
            <Card.Text>shortDes : {description}</Card.Text>
            <Card.Text>Price : ${price}</Card.Text>
            <button onClick={() => navigateToItems(_id)}>Item update</button>
            {/* <Link
              variant="primary"
              to={`/ItemDetails/${item._id}`}
              class="btn btn-primary"
            >
              Update Item
            </Link> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
