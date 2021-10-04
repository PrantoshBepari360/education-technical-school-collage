import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="educate">
          <img
            src="https://demo.hasthemes.com/educat-preview/educat/img/logo/logo.png"
            alt=""
          />
        </div>
        <ul className="navbar-ul">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
