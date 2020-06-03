import React, { useContext, useReducer } from "react";
import Square from "./Square";

export default props => {
  const initialState = () => ({
    winner: false,
    board: [null, null, null, null, null, null, null, null, null],
    currentPlayer: "player1",
    nbAction: 0
  });

  const calculateWinner = squares => {
    const winPossibility = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winPossibility.length; i++) {
      const [a, b, c] = winPossibility[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return true;
      }
    }
    return false;
  };

  const myReducer = (state, action) => {
    switch (action.type) {
      case "play":
        const board = state.board;
        let winner = false;
        let currentPlayer = state.currentPlayer;
        let newAction = state.nbAction + 1;

        board[action.payload] = newAction % 2 === 0 ? "O" : "X";
        if (newAction > 4) {
          if (calculateWinner(board) === true) {
            winner = true;
          }
        }
        currentPlayer = newAction % 2 === 0 ? "player1" : "player2";
        return {
          ...state,
          board: board,
          currentPlayer: currentPlayer,
          nbAction: newAction,
          winner: winner
        };
        break;
      case "reset":
        state = initialState();
        return state;
        break;
      default:
        throw new Error();
    }
  };

  const play = id => {
    dispatch({
      type: "play",
      payload: id
    });
  };

  const reset = () => {};

  const [state, dispatch] = useReducer(myReducer, initialState());
  let nbPlayer = state.nbAction % 2 === 0 ? "One" : "Two";

  let id = 0;
  return (
    <div className="gameBoard">
      <header>
        <div className="playerStatus">
          <span className="playerName">Player {nbPlayer}</span>
          <span className="symbol mdl-button--fab mdl-button--colored">X</span>
        </div>
      </header>
      <div className="board-squares">
        {state.board.map(
          (line, l) =>
            l % 3 === 0 && (
              <div key={l} className="board-row">
                {state.board.map(
                  (square, s) =>
                    s % 3 === 0 && (
                      <Square
                        playerAction={state.board[id]}
                        id={id++}
                        handleClick={play}
                        key={s}
                      />
                    )
                )}
              </div>
            )
        )}
      </div>
      <div className={state.winner ? "winPopin" : " winPopin disabled"}>
        <div className="message">
          Congratulations Player {nbPlayer} ! you've won !!
        </div>
        <button
          className="mdl-button mdl-button--colored mdl-button--raised mdl-js-button mdl-js-ripple-effect"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
