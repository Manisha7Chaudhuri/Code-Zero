import React from "react";
import { useLocation } from "react-router-dom";
import "./GameScreen.css";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div className="game-frame">
      <h1>Game Page</h1>
      <p>
        Selected Difficulty: <span style={{ fontWeight: "700" }}>{difficulty}</span>
      </p>
    </div>
  );
};

export default GameScreen;