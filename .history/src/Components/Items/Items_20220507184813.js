import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
const Items = () => {
  const [items, settems] = useState([]);
  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, []);
  return (
    <div>
      <h1 className="items-title">Our items</h1>
      <div className="items-container container">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
