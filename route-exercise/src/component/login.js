import React from "react";
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
  user = {
    login: "teddy",
    password: "test"
  };
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      error: false,
      goodLog: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = e => {
    e.preventDefault();
    if (
      this.state.login === this.user.login &&
      this.state.password === this.user.password
    ) {
      this.props.changeLog(this.state.login);
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <div>
        <form>
          <label>login</label>
          <input
            type="text"
            name="login"
            value={this.state.login}
            onChange={this.handleChange}
          />
          <label>password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.login}>
            submit
          </button>
        </form>
        {this.state.error ? <p> email ou mot de passe incorrect </p> : ""}
        {this.state.isLog ? <Redirect to={{ pathname: "/dashboard" }} /> : ""}
      </div>
    );
  }
}
