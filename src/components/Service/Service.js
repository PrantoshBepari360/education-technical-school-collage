import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./service.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2 className="mt-5 fs-1">Service</h2>
      <Row className="p-5">
        {services.map((service) => (
          <Col className="col-md-4 p-2">
            <Card.Img variant="top" className="w-75" src={service.img} />
            <Card.Body>
              <Card.Title>
                {" "}
                <h1>{service.name}</h1>{" "}
              </Card.Title>
              <Card.Text>
                <h3>Price: ${service.price}</h3>
                <h3>Expiration: {service.expiration}</h3>
                <h4>{service.description}</h4>
              </Card.Text>
              <Link to={`/service/${service?.id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Service;
