import React from "react";

function Message(props) {
  return <div className={`message ${props.styleName}`}>{props.text}</div>;
}

export default Message;
