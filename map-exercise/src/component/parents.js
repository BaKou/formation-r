import React from "react";
import Popin from "./popin";
import uuid from "react-uuid";

export default class Noeuds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      child: [],
      config: false,
      childConfig: {
        color: "black",
        borderRadius: "5px",
        name: this.props.name,
        borderColor: "black"
      },
      id: uuid()
    };
  }

  addChild = () => {
    if (this.state.child.length < 3) {
      this.state.child.push({ id: uuid() });

      this.setState({
        child: this.state.child
      });
    }
  };

  showConfig = () => {
    this.setState({
      config: !this.state.config
    });
  };

  changeColor = event => {
    const color = event.target.getAttribute("id");

    this.setState({
      childConfig: {
        color: this.state.childConfig.color,
        borderRadius: this.state.childConfig.borderRadius,
        name: this.state.childConfig.name,
        borderColor: color
      }
    });
  };

  changeName = event => {
    this.setState({
      childConfig: {
        color: this.state.childConfig.color,
        borderRadius: this.state.childConfig.borderRadius,
        name: event.target.value,
        borderColor: this.state.childConfig.borderColor
      }
    });
  };

  changeRadius = event => {
    this.setState({
      childConfig: {
        color: this.state.childConfig.color,
        borderRadius: event.target.value + "px",
        name: this.state.childConfig.name,
        borderColor: this.state.childConfig.borderColor
      }
    });
  };

  deleteChild = event => {
    console.log(event.target.getAttribute("number"));
    console.log(event.target);

    const goodChild = this.state.child.map(c => {
      return c.id !== this.state.id;
    });

    console.log(goodChild);

    this.setState({
      child: goodChild
    });
  };

  delete = event => {
    this.props.delete(event);
  };

  render() {
    return (
      <div className="content">
        <div className="parent noeud" style={this.state.childConfig}>
          {this.state.childConfig.name} {this.props.number}
          {this.state.child.length < 3 ? (
            <span onClick={this.addChild}>plus </span>
          ) : (
            ""
          )}
          <span onClick={this.showConfig}>config</span>
          {this.state.config ? (
            <Popin>
              <p>Nom</p>
              <input
                type="text"
                value={this.state.childConfig.name}
                onChange={this.changeName}
              />
              <p>Configuration</p>
              couleur:
              <span onClick={this.changeColor} id="green">
                vert
              </span>
              <span onClick={this.changeColor} id="red">
                rouge
              </span>
              <span onClick={this.changeColor} id="yellow">
                jaune
              </span>
              <span onClick={this.changeColor} id="blue">
                bleu
              </span>
              <p>radius</p>
              <input
                type="number"
                value={parseInt(this.state.childConfig.borderRadius)}
                onChange={this.changeRadius}
              />
            </Popin>
          ) : (
            ""
          )}
          <span onClick={this.delete}>supprimer</span>
        </div>
        <div className="childlist">
          {this.state.child.map((c, i) => {
            return (
              <Noeuds
                key={i}
                number={i}
                name={"child"}
                className="child"
                delete={this.deleteChild}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
