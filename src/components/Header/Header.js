import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="header"></div>
      <div className="bg">
        <p className="school-name future">
          MADARIPUR TECHNICAL SCHOOL AND COLLAGE
        </p>
        <p className="school-name">PREPARING STUDENTS FOR SUCCESSFUL FUTURE</p>
        <div className="distic">
          <i class="fas fa-map-marker-alt"></i>
          <p className="distic-name future">Madaripur</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
