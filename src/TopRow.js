import React from "react";
import Timer from "./Timer";

const TopRow = ({homeScore, awayScore}) => {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>
        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
        <div className="home__score">{homeScore}</div>
      </div>
      <Timer />
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score">{awayScore}</div>
      </div>
    </div>
  );
};

export default TopRow;
