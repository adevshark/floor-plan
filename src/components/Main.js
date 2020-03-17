import React, { Fragment } from "react";

import Building from "./Building";
import Form from "./Form";

export default class Main extends React.Component {
  state = {
    width: 100,
    height: 100,
    numberOfRooms: 0
  };

  handleFormInput = e => {
    if (e.target.value) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Form data={this.state} handleInput={this.handleFormInput} />
        <Building data={this.state} />
      </Fragment>
    );
  }
}
