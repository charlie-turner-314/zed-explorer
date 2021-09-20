import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/TableStyles.css";
interface Props {
  horse: {
    horse_id: number;
    name: string;
    bloodline: string;
    breed_type: string;
    coat: string | null;
    genotype: string;
    gender: string;
    img_url: string;
    owner: string;
    super_coat: boolean;
  };
}

interface Career {
  races: number;
  results: {
    first: number;
    second: number;
    third: number;
  };
  fees: number;
  winnings: number;
}

const HorseOutline = ({ horse }: Props) => {
  const [career, setCareer] = useState<Career | null>(null);
  useEffect(() => {
    const fetchData = async (horseId: number) => {
      let total = 0,
        first = 0,
        second = 0,
        third = 0,
        fees = 0,
        winnings = 0;
      const data = await (await fetch("/api/getHorseStats/" + horseId)).json();
      total = await data.length;
      await data.forEach((race: any) => {
        fees += Number(race.fee);
        winnings += race.prize;
        switch (race.position) {
          case "1": {
            first++;
            break;
          }
          case "2": {
            second++;
            break;
          }
          case "3": {
            third++;
            break;
          }
        }
      });
      return {
        races: total,
        results: {
          first: first,
          second: second,
          third: third,
        },
        fees: fees,
        winnings: winnings,
      };
    };

    fetchData(horse.horse_id).then((res) => {
      setCareer(res);
    });
  }, [horse]);
  if (career === null) {
    return <p>Loading...</p>;
  }

  return (
    <tr>
      <td width="10%">
        <img src={horse.img_url} alt="horse" width="100%" />
      </td>
      <td>
        <p>{horse.name}</p>
        <p className="horseProperties">{`${horse.genotype} ${horse.breed_type} ${horse.bloodline} ${horse.gender}`}</p>
      </td>
      <td>
        {`${career?.races} ${career?.results.first}/${career?.results.second}/${career?.results.third}`}{" "}
      </td>
      <td>{`${
        Number((career.results.first / career.races) * 100).toFixed(2) || "0"
      }%`}</td>
      <td>{career.fees.toFixed(3)}</td>
      <td>{Number(career.winnings).toFixed(3)}</td>
      <td>{`${Number(
        ((career.winnings - career.fees) / career.fees) * 100
      ).toFixed(2)}%`}</td>
    </tr>
  );
};

export default HorseOutline;
