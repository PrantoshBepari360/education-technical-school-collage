import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import HomeCarosel from "../HomeCarosel/HomeCarosel";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("./home.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <HomeCarosel></HomeCarosel>
      <h2 className="mt-5 fs-1">Service</h2>
      <Row className="p-5">
        {services.map((service) => (
          <Col className="col-md-6">
            <Card.Img variant="top" className="w-50" src={service.img} />
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
            </Card.Body>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
