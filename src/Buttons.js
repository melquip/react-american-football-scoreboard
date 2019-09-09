import React from "react";

function Buttons(props) {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={() => props.onClickSetTeamScore('home', 7)}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={() => props.onClickSetTeamScore('home', 3)}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => props.onClickSetTeamScore('away', 7)}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={() => props.onClickSetTeamScore('away', 3)}>Away Field Goal</button>
      </div>
      <div className="gameButtons">
        <button className="gameButtons__down" onClick={props.onClickDown}>Down</button>
        <button className="gameButtons__toGo" onClick={props.onClickToGo}>To go</button>
        <button className="gameButtons__ballOn" onClick={props.onClickBallOn}>Ball on</button>
        <button className="gameButtons__quarter" onClick={props.onClickQuarter}>Quarter</button>
      </div>
    </section>
  );
}

export default Buttons;
