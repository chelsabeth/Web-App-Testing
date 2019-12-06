// display the count of `balls` and `strikes` for the at-bat
import React from "react";

const Display = (props) => {
  return (
    <div>
      <div className="stats display">
        <div className="strikes">
          <h3>Strikes</h3>
          <div>{props.strikes}</div>
        </div>
        <div className="balls">
          <h3>Balls</h3>
          <div>{props.balls}</div>
        </div>
      </div>
    </div>
  );
};

export default Display;