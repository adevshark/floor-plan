import React, { Component } from 'react';
import "./Building.css";

import getRoomCoordinates from "../utils/BuildingUtil";
import Room from "./Room";
import Door from "./Door";
import { Group } from '@vx/group';
import { Drag, raise } from '@vx/drag';
import memoize from "memoize-one";

export default class Building extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      rooms: [],
    };
  }

  getRooms = memoize(
    (width, height, cnt) => getRoomCoordinates(width, height, cnt, 50, 57.5, 30)
  );

  handleMove = (dragMove) => {

  };

  render() {
    const { width, height, numberOfRooms } = this.props.data;
    const actualWidth = width * 5;
    const actualHeight = height * 5;

    const rooms = this.getRooms(actualWidth, actualHeight, numberOfRooms);

    return (
      <div
        className="div-building"
        style={{ width: actualWidth + 200, height: actualHeight + 200 }}
      >
        <svg width={actualWidth + 200} height={actualHeight + 200}>
          <Group 
            top={100}
            left={100}
          >
            <rect width={actualWidth} height={actualHeight} fill="#ffffff" stroke="#000000" rx={2} />

            { rooms.map((room, idx) => (
              <Room
                key={`room_${idx}`}
                data={room}
              />
            ))}
          </Group>

          <Door data={{canvasWidth: actualWidth, canvasHeight: actualHeight, top: 0, left: 0}}/>

        </svg>
      </div>
    );
  }
}
