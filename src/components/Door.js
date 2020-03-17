import React from 'react';

import { Group } from '@vx/group';
import { Drag, raise } from '@vx/drag';

export default function Door(props) {
  const { top, left, canvasWidth, canvasHeight } = props.data;

  return (
    <Drag
      width={50}
      height={50}
    >
      {({
        dragStart,
        dragEnd,
        dragMove,
        isDragging,
        dx,
        dy,
      }) => (
          (<Group
            top={top + dy}
            left={left + dx}
            onMouseMove={dragMove}
            onMouseUp={dragEnd}
            onMouseDown={dragStart}
            onTouchMove={dragMove}
            onTouchEnd={dragEnd}
            onTouchStart={dragStart}
          >
            <image
              x={0} y={0}
              width={50}
              height={22}
              transform={` rotate(${dx < 100 ? 270 : dy < 100 ? 0 : dx > canvasWidth+50 ? 90 : dy > canvasHeight+50 ? 180 : 0} 25 11) `}
              href={"assets/images/door.png"}
            />
          </Group>)
        )}
    </Drag>
  );
}