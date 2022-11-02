import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from "./NavBar/NavBar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Catalogue from "./pages/Catalogue/Catalogue";
import About from "./pages/About";
import {SignIn2} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import Confirmation_page from "./pages/Confirmation_page";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import {CatalogueBySearch_mother} from "./NavBar/CatalogueBySearch/CatalogueBySearch";
import React, { useState } from 'react';


function App() {

  var [items_values, setIValues] = useState([])
  var [items, setItems] = useState(0)
  var [sign_in, setSign_In] = useState("Sign In")
  var [total_price, setTotalPrice] = useState(0);
  
  return (
    <Router>
        <NavBar sign_in={sign_in}
                  items={items}  />
        <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/CatalogueBySearch" element={<CatalogueBySearch_mother
                                                       items={items} 
                                                       items_values={items_values}
                                                       setItems={setItems}
                                                       setIValues={setIValues} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile/:username" element={<Profile sign_in={sign_in}
                                                             onSign_In={setSign_In}
                                                             />}/>

          <Route path="/Basket" element={<Basket items_values={items_values}
                                                 setIValues={setIValues}
                                                 items={items} 
                                                 setItems={setItems}
                                                 total_price={total_price} 
                                                 setTotalPrice={setTotalPrice}
                                                 />} />

          <Route path="/Basket/Checkout" element={<Checkout 
                                                 items={items} 
                                                 setItems={setItems}
                                                 sign_in={sign_in}
                                                 onSign_In={setSign_In}
                                                 items_values={items_values}
                                                 setIValues={setIValues}
                                                 total_price={total_price}
                                                 setTotalPrice={setTotalPrice}
                                                 />} />     
          <Route path="/Basket/Checkout/Confirmation_page" element={<Confirmation_page/>} />   

          <Route path="/SignIn" element={<SignIn2 />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
      <div> <Footer/> </div>
    </Router>
  );
}

export default App;
