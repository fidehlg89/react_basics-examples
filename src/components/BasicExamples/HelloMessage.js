import React from "react";

class HelloMessage extends React.Component {
  render() {
    return <h2>Hola {this.props.name}</h2>;
  }
}

export default HelloMessage