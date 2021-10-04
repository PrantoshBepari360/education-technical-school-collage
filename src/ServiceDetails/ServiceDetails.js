import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  let { Id } = useParams();

  const [details, setDetails] = useState([]);
  console.log(details);
  const [singleDetails, setSingleDetail] = useState({});

  useEffect(() => {
    fetch("/service.JSON")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const foundDetails = details.find((detail) => detail.id === Id);
    setSingleDetail(foundDetails);
  }, [details]);

  return (
    <div className="w-50 mx-auto mt-5 mb-3">
      <h2>Details</h2>
      <Row>
        <Col>
          <Card.Img variant="top" className="w-50" src={singleDetails?.img} />
          <Card.Body>
            <Card.Title>
              {" "}
              <h1>{singleDetails?.name}</h1>{" "}
            </Card.Title>
            <Card.Text>
              <h4>{singleDetails?.description}</h4>
            </Card.Text>
            <Link to="/service">
              <button className="btn btn-primary">Back</button>
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceDetails;
