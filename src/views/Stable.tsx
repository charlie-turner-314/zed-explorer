import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import StableOverview from "../components/cards/StableOverview";
import StableHorses from "../components/cards/StableHorses";
import StableStats from "../components/StableStats";
import { useParams } from "react-router";

const Stable = () => {
  const [stableHorses, setStableHorses] = useState<any[] | undefined>();
  const { stable } = useParams<{ stable?: string }>();
  useEffect(() => {
    async function GetStableHorses() {
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
    );
  }

  return (
    <div className="container">
      <h4> {stable} </h4>
      <Row>
        <Col>
          <StableOverview />
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
