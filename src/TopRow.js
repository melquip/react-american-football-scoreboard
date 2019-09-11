import React from "react";
import Timer from "./Timer";

const TopRow = (props) => {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>
        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
        <div className="home__score">{props.homeScore}</div>
      </div>
      <Timer 
        reset={props.resetTimer} 
        setReset={props.setResetTimer} 
        quarter={props.quarter} 
        onEnd={props.addQuarter}
      />
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score">{props.awayScore}</div>
      </div>
    </div>
  );
};

export default TopRow;
