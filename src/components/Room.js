import React from "react";
import "./Room.css";

export default function Room(props) {
  const { width, height, offsetLeft, offsetTop } = props;

  return (
    <div
      className="div-room"
      style={{ width, height, left: offsetLeft, top: offsetTop }}
    />
  );
}
