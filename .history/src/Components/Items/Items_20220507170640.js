import React from "react";
import { Link } from "react-router-dom";
// import photo from "../../img/0.jpg";

function Items(props) {
  // const { name, ratting, feedback } = props;
  const { name, img, description, price } = service;

  return (
    <div>
      <h3>Items</h3>

      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <img src={"pic"} alt="item-pic" />
              <h5 class="card-title">Name : {name}</h5>
              <p class="card-text">price : {img}</p
              <p class="card-text">shortDes : {shortDes}</p>
              <p class="card-text">quantity : {quantity}</p>
              <p class="card-text">supplyername : {supplyername}</p>
              <Link to="/Checkout" class="btn btn-primary">
                Checkout Now
              </Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <img src={"pic"} alt="item-pic" />
              <h5 class="card-title">Name : {name}</h5>
              <p class="card-text">price : {price}</p>
              <p class="card-text">shortDes : {shortDes}</p>
              <p class="card-text">quantity : {quantity}</p>
              <p class="card-text">supplyername : {supplyername}</p>
              <Link to="/Checkout" class="btn btn-primary">
                Checkout Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
