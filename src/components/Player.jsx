import React from "react";
import { Card } from "react-bootstrap";
import "../index.css";

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }} className="main-card">
      <Card.Img variant="top" src={imageURL} className="player-img" />
      <Card.Body className="card-body">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-text">
          <p>
            <strong>Team:</strong> {team}
          </p>
          <p>
            <strong>Nationality:</strong> {nationality}
          </p>
          <p>
            <strong>Jersey Number:</strong> {jerseyNumber}
          </p>
          <p>
            <strong>Age:</strong> {age}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
