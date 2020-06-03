import React from "react";
export default props => {
  const playerPlay = () => {
    props.handleClick(props.id);
  };

  return (
    <div className="square" onClick={playerPlay}>
      {props.playerAction}
    </div>
  );
};
