// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Headers from './Components/Headers/Headers';
// import Home from './Components/Home/Home';
// import Register from './Components/Register/Register';
// import Signin from './Components/Signin/Signin';
// import Blogs from './Components/Blogs/Blogs';
// import About from './Components/About/About';
// import RequireAuth from './Components/RequireAuth/RequireAuth';
// import Checkout from './Components/Checkout/Checkout';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NotFound from './Components/NotFound/NotFound';
// import Footer from './Components/Footer/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Headers></Headers>
//       <Routes>
//         <Route path="/" element={<Home></Home>}></Route>
//         <Route path="/home" element={<Home></Home>}></Route>
//         <Route path="/Register" element={<Register></Register>}></Route>
//         <Route path="/Signin" element={<Signin></Signin>}></Route>
//         <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
//         <Route path="/About" element={<About></About>}></Route>
//         <Route path="/Checkout" element={
//           <RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
//         <Route path="/*" element={<NotFound />} />

//       </Routes>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Headers from "./Components/Headers/Headers";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Signin from "./Components/Signin/Signin";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Checkout from "./Components/Checkout/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import Inventory from "./Components/Inventory/Inventory";
// import MyItems from "./Components/MyItems/MyItems";
import ItemDetails from "./Components/ItemDetails/ItemDetails";

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/Signin" element={<Signin></Signin>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        {/* <Route path="/myItems" element={<MyItems></MyItems>}></Route> */}
        <Route
          path="/ItemDetails/:id"
          element={<ItemDetails></ItemDetails>}
        ></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/Checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
