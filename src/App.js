import React, { Component } from "react";
import "./App.css";
import { Image } from "semantic-ui-react";
import image from "./photos/top-photo.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image src={image} fluid />
      </div>
    );
  }
}

export default App;

// <div style={{ height: "2000px" }}>
//   <a href="#click">LC MAKES STUFF</a>
// </div>
// <div id="click" style={{ height: "2000px" }}>
//   DID THIS WORK?
// </div>
