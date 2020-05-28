import React from "react";

export default class Post extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.post.title}</h2>
        <p> {this.props.post.content}</p>
      </div>
    );
  }
}
