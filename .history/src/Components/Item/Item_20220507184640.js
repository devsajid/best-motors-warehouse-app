import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { name, img, description, price } = item;

  return (
    <div c>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <img src={img} alt="item-pic" />
              <h5 class="card-title">Name : {name}</h5>
              <p class="card-text">shortDes : {description}</p>
              <p class="card-text">Price : {price}</p>
              {/* <p class="card-text">quantity : {quantity}</p>
        <p class="card-text">supplyername : {supplyername}</p> */}
              <Link to="/Checkout" class="btn btn-primary">
                Checkout Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
