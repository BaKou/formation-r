import React from "react";
import Post from "./post";

export default class Dashboard extends React.Component {
  posts = [
    { id: 16, title: "React JS", content: "Libraire ou Framework ?" },
    { id: 11, title: "React Native", content: "Mobile React" },
    { id: 100, title: "Angular", content: "Super ..." },
    { id: 7, title: "Symfony", content: "Framework expressif ..." },
    { id: 27, title: "MongoDB", content: "Base de données NoSQL" }
  ];

  constructor(props) {
    super(props);
    this.state = {
      postId: null
    };
  }

  selectPost = event => {
    this.setState({
      postId: event.target.getAttribute("data-key")
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.posts.map((post, i) => {
            return (
              <li onClick={this.selectPost} data-key={i} key={i}>
                {post.title}
              </li>
            );
          })}
        </ul>
        {this.state.postId ? <Post post={this.posts[this.state.postId]} /> : ""}
      </div>
    );
  }
}
