function getRoomCoordinates(
  width,
  height,
  numberOfRooms,
  boxWidth,
  boxHeight,
  hall
) {
  if (width === 0 || height === 0 || numberOfRooms === 0) return [];

  let offsetLeft = 0;
  let offsetTop = 0;

  let offsetLeftExtended = 0;

  let switched = false;

  const rooms = [];

  for (let i = 0; i < numberOfRooms; i++) {
    if (width >= offsetLeft + boxWidth) {
      rooms.push({
        width: boxWidth,
        height: boxHeight,
        top: offsetTop,
        left: offsetLeft,
      });

      offsetLeft += boxWidth;
    } else {
      if (!switched) {
        //check for hall & add if
        offsetTop = offsetTop + hall;
        offsetLeftExtended = offsetLeft - boxHeight;
      }

      switched = true;

      offsetTop = offsetTop + boxWidth;

      if (height >= offsetTop + boxWidth) {
        rooms.push({
          width: boxHeight,
          height: boxWidth,
          top: offsetTop,
          left: offsetLeftExtended,
        });
      } else break;
    }
  }

  return rooms;
}

export default getRoomCoordinates;
