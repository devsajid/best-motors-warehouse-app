import React from "react";
import Items from "../Items/Items";

const Inventory = () => {
  return (
    <div>
      {" "}
      <Items></Items>
      <Lin to={`/additem/${''}`} class="btn btn-primary">Add Item</Link></div>
  );
};

export default Inventory;
