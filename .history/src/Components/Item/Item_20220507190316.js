import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Nav } from "react-bootstrap";

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
    //           <p class="card-text">shortDes : {description}</p>
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
    // </div><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  );
};

export default Item;
