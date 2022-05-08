import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = ({ item }) => {
  const { name, img, description, price } = item;

  return (
    // <div className="item">
    //   <div class="row">
    //     <div class="col-sm-6">
    //       <div class="card">
    //         <div class="card-body">
    //           <img src={img} alt="item-pic" />
    //           <h5 class="card-title">Name : {name}</h5>
    //           <p class="card-text"></p>
    //           <p class="card-text">Price : {price}</p>
    //           {/* <p class="card-text">quantity : {quantity}</p>
    //     <p class="card-text">supplyername : {supplyername}</p> */}
    //           <Link to="/Checkout" class="btn btn-primary">
    //             Checkout Now
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name : {name}</Card.Title>
        <Card.Text>shortDes : {description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
