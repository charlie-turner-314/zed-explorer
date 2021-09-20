import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StableOverview = (stable: any) => {
  return (
    <div className="card">
      <Row>Overview</Row>
      <Row>
        <Col>Image</Col>
        <Col>
          <Row>Thoroughbreds</Row>
          <Row>Career</Row>
          <Row>Win Rate</Row>
        </Col>
      </Row>
    </div>
  );
};

export default StableOverview;
