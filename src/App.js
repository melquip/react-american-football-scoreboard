//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const onClickHomeTouchdown = () => {
    setHomeScore(homeScore + 7);
  }
  const onClickHomeFieldGoal = () => {
    setHomeScore(homeScore + 3);
  }
  const onClickAwayTouchdown = () => {
    setAwayScore(awayScore + 7);
  }
  const onClickAwayFieldGoal = () => {
    setAwayScore(awayScore + 3);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow 
          homeScore={homeScore}
          awayScore={awayScore}
        />
        <BottomRow />
      </section>
      <Buttons
        onClickHomeTouchdown={onClickHomeTouchdown}
        onClickHomeFieldGoal={onClickHomeFieldGoal}
        onClickAwayTouchdown={onClickAwayTouchdown}
        onClickAwayFieldGoal={onClickAwayFieldGoal}
      />
    </div>
  );
}

export default App;
