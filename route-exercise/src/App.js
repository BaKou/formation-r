import React from "react";
import "./App.css";
import Home from "./component/home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./component/login";
import Dashboard from "./component/dashboard";
import PrivateRoute from "./component/privateroute";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLog: false
    };
  }

  componentDidMount() {
    this.checkLog();
  }

  checkLog = () => {
    if (localStorage.getItem("auth") !== null) {
      this.setState({
        isLog: true
      });
    }
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      isLog: false
    });
  };

  log = login => {
    localStorage.setItem("auth", login);
    this.setState({
      isLog: true
    });
  };

  render() {
    return (
      <Router>
        <div>
          {this.state.isLog ? (
            <a onClick={this.logout}>logout</a>
          ) : (
            <Link to="/login">login</Link>
          )}
          <Link to="/dashboard">dashboard</Link>
          <Link to="/home ">Home </Link>
          <Switch>
            <Route path="/login">
              <Login changeLog={this.log} isLog={this.state.isLog} />
            </Route>
            <PrivateRoute path="/dashboard" isLoggedIn={this.state.isLog}>
              <Dashboard />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
