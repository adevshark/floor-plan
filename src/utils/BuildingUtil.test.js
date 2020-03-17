import getRoomCoordinates from "./BuildingUtil";

describe("getting room coordinates", () => {
  it("single room", () => {
    const rooms = getRoomCoordinates(100, 100, 1, 10, 10, 5);

    expect(rooms.length).toBe(1);

    expect(rooms[0].offsetLeft).toBe(-1);
    expect(rooms[0].offsetTop).toBe(-1);
  });

  it("10 rooms", () => {
    const rooms = getRoomCoordinates(100, 100, 10, 10, 10, 5);

    expect(rooms.length).toBe(10);

    expect(rooms[9].offsetLeft).toBe(89);
    expect(rooms[9].offsetTop).toBe(-1);
  });

  it("11 rooms", () => {
    const rooms = getRoomCoordinates(100, 100, 11, 10, 10, 5);

    expect(rooms.length).toBe(11);

    expect(rooms[10].offsetLeft).toBe(89);
    expect(rooms[10].offsetTop).toBe(14);
  });

  it("20 rooms", () => {
    const rooms = getRoomCoordinates(100, 100, 20, 10, 10, 5);

    expect(rooms.length).toBe(18);

    expect(rooms[17].offsetLeft).toBe(89);
    expect(rooms[17].offsetTop).toBe(84);
  });

  it("all", () => {
    const rooms = getRoomCoordinates(100, 100, 20, 10, 10, 5);

    expect(rooms.length).toBe(18);

    expect(rooms[0].offsetLeft).toBe(-1);
    expect(rooms[0].offsetTop).toBe(-1);

    expect(rooms[9].offsetLeft).toBe(89);
    expect(rooms[9].offsetTop).toBe(-1);

    expect(rooms[10].offsetLeft).toBe(89);
    expect(rooms[10].offsetTop).toBe(14);

    expect(rooms[17].offsetLeft).toBe(89);
    expect(rooms[17].offsetTop).toBe(84);
  });
});
