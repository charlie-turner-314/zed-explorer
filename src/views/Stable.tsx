import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

import StableOverview from "../components/cards/StableOverview";
import StableHorses from "../components/cards/StableHorses";
import { useParams } from "react-router";

const Stable = () => {
  const [stableHorses, setStableHorses] = useState<any[] | undefined>();
  const { stable } = useParams<{ stable?: string }>();
  useEffect(() => {
    async function GetStableHorses() {
      if (stable && stable.length >= 25) {
        // stable must be an address not a name - try to find name
        console.log("trying");
        const name = await (await fetch(`/api/getStableSlug/${stable}`)).json();
        console.log(name);
      }
      const response = await fetch("/api/getStableHorses/" + stable);
      const stableHorses = await response.json();
      if (stableHorses[0]) {
        setStableHorses(stableHorses);
      }
    }
    GetStableHorses();
  }, [stable]);

  if (!stable || !stableHorses) {
    return (
      <Container>
        <Row>
          <Col />
          <Col>
            <p>Looks like there isn't a valid wallet address...</p>
            <input
              style={{ width: "500px" }}
              id="stableInput"
              type="text"
              placeholder="Paste your wallet address from metamask here"
            />
            <button
              onClick={() => {
                const searchTerm = (
                  document.getElementById("stableInput") as HTMLInputElement
                ).value;
                window.location.href = `/stable/${searchTerm}`;
              }}
            >
              Search
            </button>
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />
          <Col>
            <input
              style={{ width: "500px" }}
              id="stableSlugInput"
              type="text"
              placeholder="Stable slug"
            />
            <button
              onClick={() => {
                const searchTerm = (
                  document.getElementById("stableSlugInput") as HTMLInputElement
                ).value;
                window.location.href = `/stable/${searchTerm}`;
              }}
            >
              Search
            </button>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }

  return (
    <div className="container">
      <h4> {stable} </h4>
      <Row>
        <Col>
          <StableOverview stable={stable} />
        </Col>
        <Col>
          {stableHorses !== undefined ? (
            <StableHorses horses={stableHorses} />
          ) : (
            "loading"
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Stable;
