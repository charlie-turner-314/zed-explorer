import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import HorseOutline from "../HorseOutline";

interface Props {
  horses: any[];
}

const StableHorses = ({ horses }: Props) => {
  return (
    <div className="card">
      <Row style={{ margin: "5px" }}>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Info</td>
              <td>Career</td>
              <td>W%</td>
              <td>Fees</td>
              <td>Winnings</td>
              <td>ROI</td>
            </tr>
          </thead>
          <tbody>
            {horses !== undefined
              ? horses.map((horseObj, idx) => {
                  return <HorseOutline key={idx} horse={horseObj} />;
                })
              : "Loadingggggg...."}
          </tbody>
        </table>
      </Row>
    </div>
  );
};

export default StableHorses;
