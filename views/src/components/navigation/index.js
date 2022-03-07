import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../components/logo.gif";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img className="logo-img" src={Logo} />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/doctor" className="links">
              Weather
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
