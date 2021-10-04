import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./about.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-5 mb-3">
      <h2>About</h2>
      <Row className="p-5">
        {services.map((service) => (
          <Col className="col-md-4">
            <Card.Img variant="top" className="w-75" src={service.img} />
            <Card.Body>
              <Card.Title>
                {" "}
                <h1>{service.name}</h1>{" "}
              </Card.Title>
              <Card.Text>
                <h4>{service.description}</h4>
              </Card.Text>
              <Link to={`/about/${service.id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default About;
