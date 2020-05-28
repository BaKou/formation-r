import React from "react";
import "./App.css";
import Noeuds from "./component/parents";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Noeuds number={0} name={"parent"} />
      </div>
    );
  }
}

export default App;
