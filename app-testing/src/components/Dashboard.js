// should be updated when the user records activity on the `Dashboard` component
import React, { useState } from "react";

import Display from "./Display";

const Dashboard = () => {
  let [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [hits, setHits] = useState(1);
  //   const [fouls, setFouls] = useState(0);

  const addStrike = () => {
    if(strikes < 2){
        setStrikes(strikes + 1);
    } else {
        setStrikes(0)
        setBalls(0)
    }
  };
  
    const addBall = () => {
        if(balls < 3){
            setBalls(balls + 1);
        } else {
            setBalls(0)
            setStrikes(0)
        }
  };
  
    const addFoul = () => {
    if (strikes < 2) {
      return setStrikes + 1;
    } else if (strikes === 2) {
      return (setStrikes = 2);
    }
  };
  
    const addHit = () => {
    if (hits > 0) {
      return (
          setStrikes(0),
          setBalls(0),
          setHits(hits + 1)
      );
    }
  };

  return (
    <div>
      <Display
        strikes={strikes}
        balls={balls} 
      />
      <div className="buttons dashboard">
        <button onClick={() => addStrike()}>Strike</button>
        <button onClick={() => addBall()}>Ball</button>
        <button onClick={() => addFoul()}>Foul</button>
        <button onClick={() => addHit()}>Hit</button>
      </div>
    </div>
  );
};

export default Dashboard;

