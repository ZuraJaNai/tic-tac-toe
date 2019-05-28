import React from "react";

function Score(props) {
  return (
    <div className="players-container flex-container">
      <div className={props.pOneStyleName}>
        <div>Player 1</div>
        <div>{props.pOneScore}</div>
      </div>
      <div className={props.pTwoStyleName}>
        <div>Player 2</div>
        <div>{props.pTwoScore}</div>
      </div>
    </div>
  );
}

export default Score;
