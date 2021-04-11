import React, { Component } from "react";

class About extends Component {
  componentDidMount() {
    console.log("About DID MOUNT");
  }
  componentWillUnmount() {
    console.log("About WILL UNMOUNT");
  }
  render() {
    console.log("RENDERED...");
    return (
      <div>
        <h1>About Page</h1>
        <p>This is about me : {this.props.name} </p>
      </div>
    );
  }
}

export default About;
