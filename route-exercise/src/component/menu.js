import React from "react";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.children.map((c, i) => {
          console.log(c);
          return <li key={i}> {c.props.children} </li>;
        })}
      </ul>
    );
  }
}
