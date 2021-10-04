import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="footer">
        <div className="educate">
          <img
            src="https://demo.hasthemes.com/educat-preview/educat/img/logo/logo.png"
            alt=""
          />
        </div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/service">Post Tuition</Link>
          </li>
          <li>
            <Link to="/skills">Library</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/home">School in Bangladesh</Link>
          </li>
          <li>
            <Link to="/about">Secondery school in Bangladesh</Link>
          </li>
          <li>
            <Link to="/service">Collage in Bangladesh</Link>
          </li>
          <li>
            <Link to="/skills">Techinacal collage in Bangladesh</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/home">Dhaka Education Board</Link>
          </li>
          <li>
            <Link to="/about">Borisal Education Board</Link>
          </li>
          <li>
            <Link to="/service">Rajshasi Board</Link>
          </li>
          <li>
            <Link to="/skills">Dinagpur Education Board</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
