import getRoomCoordinates from "./BuildingUtil";

describe("getting room coordinates", () => {
  it("single room", () => {
    const rooms = getRoomCoordinates(100, 100, 1, 10, 10, 5);

    expect(rooms.length).toBe(1);

    expect(rooms[0].left).toBe(0);
    expect(rooms[0].top).toBe(0);
  });

  it("10 rooms", () => {
    const rooms = getRoomCoordinates(100, 100, 10, 10, 10, 5);

    expect(rooms.length).toBe(10);

    expect(rooms[9].left).toBe(90);
    expect(rooms[9].top).toBe(0);
  });

  it("11 rooms", () => {
    const rooms = getRoomCoordinates(100, 100, 11, 10, 10, 5);

    expect(rooms.length).toBe(11);

    expect(rooms[10].left).toBe(90);
    expect(rooms[10].top).toBe(15);
  });

  it("20 rooms", () => {
    const rooms = getRoomCoordinates(100, 100, 20, 10, 10, 5);

    expect(rooms.length).toBe(18);

    expect(rooms[17].left).toBe(90);
    expect(rooms[17].top).toBe(85);
  });

  it("all", () => {
    const rooms = getRoomCoordinates(100, 100, 20, 10, 10, 5);

    expect(rooms.length).toBe(18);

    expect(rooms[0].left).toBe(0);
    expect(rooms[0].top).toBe(0);

    expect(rooms[9].left).toBe(90);
    expect(rooms[9].top).toBe(0);

    expect(rooms[10].left).toBe(90);
    expect(rooms[10].top).toBe(15);

    expect(rooms[17].left).toBe(90);
    expect(rooms[17].top).toBe(85);
  });

  it("all, different sides", () => {
    const rooms = getRoomCoordinates(100, 100, 20, 10, 12, 5);

    expect(rooms.length).toBe(18);

    expect(rooms[0].left).toBe(0);
    expect(rooms[0].top).toBe(0);

    expect(rooms[9].left).toBe(90);
    expect(rooms[9].top).toBe(0);

    expect(rooms[10].left).toBe(88);
    expect(rooms[10].top).toBe(15);

    expect(rooms[17].left).toBe(88);
    expect(rooms[17].top).toBe(85);
  });
});
