import React from "react";
import "./Room.css";

import { Group } from '@vx/group';

export default function Room(props) {
  const { width, height, top, left } = props.data;

  return (
    <Group 
      top={top}
      left={left}
    >
      <rect
        width={width}
        height={height}
        fill="#c3f5f5"
        stroke="#000000"
      />
    </Group>
  );
}
