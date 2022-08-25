import React from "react";
import SearchBar from "../SearchBar/SearchBar.Js";
import "../SearchBar/SearchBar.css";
import "./styles.css";
import Logo from '../images/user-login-3057.svg';


import {Link, useMatch, useResolvedPath } from "react-router-dom";

export default  class NavBar extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      search: "",

    };
    this.handleSBarChange=this.handleSBarChange.bind(this);
    
  }
  handleSBarChange(event){
    this.setState({
      search: event.target.value
    });

  }
  render(){
  return (

  <nav className="nav">
  <Link to="/" className="site-title"> Home </Link>
 
  <input type="text" class='search' value={this.state.search} name="Filter" 
   placeholder="Search" onChange={this.handleSBarChange}/>
  
  <ul>
  <li class="dropdown">
    <button class="dropbtn">Menu
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <Link to="/Catalogue" className="a">Catalogue</Link>
    </div>
  </li>
    <CustomLink to="/About"> About </CustomLink>
    <CustomLink to="/Profile/:"> Profile </CustomLink>
    
    <CustomLink to="/SignIn"> 
    <i><img class='Logo_Sign_In' src={Logo} alt=''/></i>
    Sign In
    </CustomLink>
    
  </ul>
  </nav>
  );
}
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }