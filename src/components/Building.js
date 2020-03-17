import React from "react";
import "./Building.css";

import getRoomCoordinates from "../utils/BuildingUtil";
import Room from "./Room";

export default function Building(props) {
  const { width, height, numberOfRooms } = props.data;

  const actualWidth = width * 5;
  const actualHeight = height * 5;
  const rooms = getRoomCoordinates(
    actualWidth,
    actualHeight,
    numberOfRooms,
    50,
    57.5,
    30
  );

  console.log(rooms);
  console.log("render this many rooms", rooms.length);

  return (
    <div
      className="div-building"
      style={{ width: actualWidth, height: actualHeight }}
    >
      {rooms.map((room, idx) => (
        <Room
          key={`room_${idx}`}
          width={room.boxWidth}
          height={room.boxHeight}
          offsetLeft={room.offsetLeft}
          offsetTop={room.offsetTop}
        />
      ))}
    </div>
  );
}
