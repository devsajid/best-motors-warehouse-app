import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
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
      <CardGoup>
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
