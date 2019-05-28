import React from "react";

function Button(props) {
  return (
    <div
      className={`btn-action ${props.styleName}`}
      onClick={props.handleAction}
    >
      {props.text}
    </div>
  );
}

export default Button;
