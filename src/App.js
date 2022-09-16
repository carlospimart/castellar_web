import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from "./NavBar/NavBar";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue/Catalogue";
import About from "./pages/About";
import {SignIn2} from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import {CatalogueBySearch_mother} from "./NavBar/CatalogueBySearch/CatalogueBySearch";
import React, { useState } from 'react';
import useToken from './useToken';


function App() {
  
  return (
    <Router>
        <NavBar/>
        <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/CatalogueBySearch" element={<CatalogueBySearch_mother/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile/:username" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn2 />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
      <div> Foooter </div>
    </Router>
  );
}

export default App;
