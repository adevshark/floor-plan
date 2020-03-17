import React from "react";
import "./Form.css";

export default function Form(props) {
  const { width, height, numberOfRooms } = props.data;
  const { handleInput } = props;

  return (
    <div className="div-form">
      <input
        name="numberOfRooms"
        placeholder="Enter Rooms"
        value={numberOfRooms}
        onChange={handleInput}
      />
      <input
        name="width"
        placeholder="Enter width"
        value={width}
        onChange={handleInput}
      />
      <input
        name="height"
        placeholder="Enter Height"
        value={height}
        onChange={handleInput}
      />
    </div>
  );
}
