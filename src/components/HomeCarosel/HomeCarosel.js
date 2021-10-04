import React from "react";
import { Carousel } from "react-bootstrap";
import './HomeCarosel.css';

const HomeCarosel = () => {
  return (
    <div>
        <h1 className="collage-name">Techinal School & Collage</h1>
      <Carousel className="carosel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.madaripurtsc.gov.bd/assets/images/slide/Banner610e15ddc6661.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.madaripurtsc.gov.bd/assets/images/slide/B-26111d0dc15519.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.madaripurtsc.gov.bd/assets/images/slide/Banner-1610eb3261b869.JPG"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarosel;
