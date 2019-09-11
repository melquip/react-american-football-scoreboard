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
  /*
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
  */
  // stretch
  const onClickSetTeamScore = (team, points) => {
    switch(team) {
      case 'home':
        setHomeScore(homeScore + points)
        break;
      case 'away':
        setAwayScore(awayScore + points)
        break;
      default:
        console.error(`The team ${team} doesn't exist!`);
        break;
    }
  }
  
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(7);
  const [ballOn, setBallOn] = useState(20);
  const [quarter, setQuarter] = useState(1);

  const onClickDown = () => {
    if(down < 4) {
      setDown(down + 1);
    }
  }
  const onClickToGo = () => {
    setToGo(toGo + 1);
  }
  const onClickBallOn = () => {
    setBallOn(ballOn + 1);
  }

  const [resetTimer, setResetTimer] = useState(false)
  const onClickQuarter = () => {
    if(quarter < 4) {
      setQuarter(quarter + 1);
      setResetTimer(true);
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow 
          homeScore={homeScore}
          awayScore={awayScore}
          quarter={quarter}
          addQuarter={onClickQuarter}
          resetTimer={resetTimer}
          setResetTimer={setResetTimer}
        />
        <BottomRow
          down={down}
          toGo={toGo}
          ballOn={ballOn}
          quarter={quarter}
        />
      </section>
      <Buttons 
        onClickSetTeamScore={onClickSetTeamScore}
        onClickDown={onClickDown}
        onClickToGo={onClickToGo}
        onClickBallOn={onClickBallOn}
        onClickQuarter={onClickQuarter}
      />
    </div>
  );
}

export default App;
