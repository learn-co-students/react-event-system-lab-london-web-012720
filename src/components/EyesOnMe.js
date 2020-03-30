import React, { Component } from "react";

class EyeOnMe extends Component {
  state = {};
  render() {
    return (
      <button
        onFocus={() => console.log("Good!")}
        onBlur={() => console.log("Hey! Eyes on me!")}
      ></button>
    );
  }
}

export default EyeOnMe;
