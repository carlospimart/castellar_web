import React from "react";
import "./styles.css"
import {Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
  <nav className="nav">
  <Link to="/" className="site-title"> Home </Link>
  <ul>
    <CustomLink to="/About"> About </CustomLink>
    <CustomLink to="/Profile/:"> Profile </CustomLink>
  </ul>
  </nav>
  );
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