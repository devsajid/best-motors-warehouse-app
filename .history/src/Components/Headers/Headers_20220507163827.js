import React from "react";
// import "./Headers.css";
// import { Link } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import { signOut } from "firebase/auth";
import { Navbar, Container, Nav } from "react-bootstrap";

function Headers() {
  // const [user] = useAuthState(auth);
  // const handleSignOut = () => {
  //   signOut(auth);
  // };

  return (
    <div>
      {" "}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> React Bootstrap</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#myitems">Myitems</Nav.Link>
              <Nav.Link href="#inventory">Inventory</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#signIn">
                Sign n
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//           <Link to="/" class="navbar-brand">
//             <h4>MR Rana Photography</h4>
//           </Link>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav">
//               <li class="nav-item">
//                 <Link to="/" class="nav-link active"aria-current="page">
//                   Home
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link to="/Blogs" class="nav-link">
//                   Blog
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link to="/About" class="nav-link">
//                   About
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link to="/MyItems" class="nav-link">
//                   MyItems
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link to="/Inventory" class="nav-link">
//                   Inventory
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link to="/Register" class="nav-link">
//                   Register
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 {user ? (
//                   <button
//                     onClick={handleSignOut}
//                     class="nav-link btn btn-light"
//                   >
//                     Sign Out
//                   </button>
//                 ) : (
//                   <Link to="/Signin" class="nav-link">
//                     Signin
//                   </Link>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );

export default Headers;
