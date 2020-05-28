import React, { Children } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default class PrivateRoute extends React.Component {
  constructor({ children, ...rest }) {
    super();
    this.children = children;
    this.rest = rest;
  }

  render() {
    return (
      <Route
        {...this.rest}
        render={({ location }) =>
          this.props.isLoggedIn ? (
            this.children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
}
