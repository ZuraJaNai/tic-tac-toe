import React from "react";

function Cell(props) {
  return (
    <div className="cell" onClick={() => props.handleClick(props.index)}>
      {props.value}
    </div>
  );
}

export default Cell;
