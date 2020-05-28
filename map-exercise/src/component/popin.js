import React from "react";

export default class Popin extends React.Component {
  render() {
    return <div className="config">{this.props.children}</div>;
  }
}
