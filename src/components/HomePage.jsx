import React from "react";
import GameBoard from "./GameBoard";
import Header from "./Header";
import ActionsControls from "./ActionsControls";

function HomePage(props) {
  return (
    <div className="container">
      <Header />
      <GameBoard />
      <ActionsControls />
    </div>
  );
}

export default HomePage;
