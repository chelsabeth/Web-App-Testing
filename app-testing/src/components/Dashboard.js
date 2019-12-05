// should be updated when the user records activity on the `Dashboard` component.
import React, { useState } from "react";

const Dashboard = () => {
  return (
    <div className="buttons">
      <div className="home-buttons">
        <button>Orioles Strike</button>
        <button>Orioles Ball</button>
        <button>Orioles Foul</button>
        <button>Orioles Hit</button>
      </div>

      <div className="away-buttons">
        <button>Away Strike</button>
        <button>Away Ball</button>
        <button>Away Foul</button>
        <button>Away Hit</button>
      </div>
    </div>
  );
};

export default Dashboard;
