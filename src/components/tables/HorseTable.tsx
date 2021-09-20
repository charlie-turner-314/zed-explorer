import HorseOutline from "components/HorseOutline";
import React, { useEffect, useState } from "react";

const HorseTable = () => {
  const [horses, setHorses] = useState<any[]>();
  useEffect(() => {
    (async function fetchHorses() {
      const result = await (await fetch("/api/getHorses")).json();
      console.log(result);
      setHorses(result);
    })();
  }, []);

  if (!horses) return <div>Nope</div>;

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th></th>
          <th>Details</th>
          <th>Career</th>
          <th>W%</th>
          <th>Fees</th>
          <th>Profit</th>
          <th>ROI%</th>
        </tr>
      </thead>
      <tbody>
        {horses.map((horse) => (
          <HorseOutline horse={horse} />
        ))}
      </tbody>
    </table>
  );
};

export default HorseTable;
