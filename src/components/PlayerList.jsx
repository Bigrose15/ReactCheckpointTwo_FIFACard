import React from "react";
import players from "../Players"; // Import the players data
import Player from "./Player"; //imports the
import { Row } from "react-bootstrap";

const PlayerList = () => {
  return (
    <body className="body">
      <Row style={{ rowGap: "10px" }} className="">
        <h2>Famous Football Players</h2>{" "}
        <img src="/fifa-logo.jpeg" alt="FIFA logo" />
        {players.map((player, index) => (
          <Player
            key={index}
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            imageURL={player.imageURL}
          />
        ))}
      </Row>
    </body>
  );
};

export default PlayerList;
