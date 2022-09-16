import React from "react";
import SearchBar, {Catalogue_link} from "./SearchBar/SearchBar";
import "./SearchBar/SearchBar.css";
import "./styles.css";
import Logo from '../images/user-login-3057.svg';


import {Link, useMatch, useResolvedPath } from "react-router-dom";

export default  class NavBar extends React.Component{

  render(){

  return (

  <nav className="nav">
  <Link to="/" className="site-title"> Home </Link>

  <div>
     <form>
     <Catalogue_link/>
     </form>
  </div>

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
    
    
    <CustomLink to="/Profile/:"> 
    <div>
      <form class="form_signIn">
        <img class='Logo_Sign_In' src={Logo} alt=''/>
         <span  id='sign_in_text'>Sign In</span>
      </form>
    </div>
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

  //<input class='Bar'  type="text" value={this.state.search} name="Filter" 
    //   placeholder='Search' onChange={this.handleSBarChange}/>