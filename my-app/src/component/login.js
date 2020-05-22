import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>login</label>
          <input type="text" value={this.state.login} />
          <label>password</label>
          <input type="password" value={this.state.password} />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
