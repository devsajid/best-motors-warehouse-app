import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { RowContainer } from "react-bootstrap";
const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h1 className="items-title">Our items</h1>
      {items.map((item) => (
        <Container>
          <Row>
            <Item key={item.id} item={item}></Item>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default Items;
