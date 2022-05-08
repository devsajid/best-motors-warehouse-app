import React from "react";
import { Link } from "react-router-dom";
import Items from "../Items/Items";

const Inventory = () => {
  return (
    <div>
      {" "}
      <Items></Items>
      <Link to={`/additem/${""}`} class="btn btn-primary">
        Add Item
      </Link>
    </div>
  );
};

export default Inventory;
