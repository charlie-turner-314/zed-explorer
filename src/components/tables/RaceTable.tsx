import React from "react";

interface Props {
  horses: number[];
}

const RaceTable = ({ horses }: Props) => {
  return (
    <table style={{ width: "100%" }}>
      <tr>
        <th>Event</th>
        <th>Class</th>
        <th>Distance</th>
        <th>Time</th>
        <th>Prizepool</th>
      </tr>
    </table>
  );
};

export default RaceTable;
