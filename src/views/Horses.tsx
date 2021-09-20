import React from "react";
import ButtonFilter from "../components/ButtonFilter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HorseTable from "../components/tables/HorseTable";

const Horses = () => {
  return (
    <Container fluid style={{ width: "70%" }}>
      <Container>
        <Row>
          <Col>
            <ButtonFilter
              title="Distance"
              items={[1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600]}
            ></ButtonFilter>
          </Col>
          <Col>
            <ButtonFilter
              items={[
                "Griffin",
                "Class 1",
                "Class 2",
                "Class 3",
                "Class 4",
                "Class 5",
              ]}
            ></ButtonFilter>
          </Col>
        </Row>
      </Container>
      <HorseTable></HorseTable>
    </Container>
  );
};

export default Horses;
