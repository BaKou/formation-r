import React from "react";

class Token extends React.Component {
  error = false;
  denominations = [1, 5, 10, 20, 50, 100, 200];
  result = [];

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  calcul = event => {
    const userNumber = parseInt(this.state.value);

    if (isNaN(userNumber)) {
      this.error = true;
    } else if (Math.sign(userNumber) === -1) {
      this.error = true;
    } else {
      this.error = false;
    }

    console.log(this.denominations.length);

    for (let i = 9; i > -1; i--) {
      console.log(userNumber);
      console.log(this.denominations[i]);
      let rest = userNumber / this.denominations[i];

      this.result.push(Math.ceil(rest));
    }

    console.log(this.result);
  };

  render() {
    return (
      <React.Fragment>
        <input name="token" />
        <button onClick={this.calcul} value={this.state.value}>
          valid
        </button>
        {this.error ? <p>Vous devez saisir un nombre non négatif</p> : ""}
      </React.Fragment>
    );
  }
}

export default Token;
