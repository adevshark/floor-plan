function getRoomCoordinates(
  width,
  height,
  numberOfRooms,
  boxWidth,
  boxHeight,
  hall
) {
  if (width === 0 || height === 0 || numberOfRooms === 0) return [];

  let offsetLeft = -1;
  let offsetTop = -1;

  let offsetLeftExtended = 0;

  let switched = false;

  const rooms = [];

  for (let i = 0; i < numberOfRooms; i++) {
    if (width >= offsetLeft + boxWidth) {
      rooms.push({
        offsetLeft: offsetLeft,
        boxWidth: boxWidth,
        boxHeight: boxHeight,
        offsetTop: offsetTop
      });

      offsetLeft += boxWidth;
    } else {
      if (!switched) {
        //check for hall & add if
        offsetTop = offsetTop + hall;
        offsetLeftExtended = offsetLeft - boxHeight;
      }

      switched = true;

      offsetTop = offsetTop + boxHeight;

      if (height >= offsetTop + boxHeight) {
        rooms.push({
          offsetLeft: offsetLeftExtended,
          boxWidth: boxHeight,
          boxHeight: boxWidth,
          offsetTop: offsetTop
        });
      } else break;
    }
  }

  return rooms;
}

export default getRoomCoordinates;
