import React from "react";

function Buttons(props) {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={props.onClickHomeTouchdown}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={props.onClickHomeFieldGoal}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={props.onClickAwayTouchdown}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={props.onClickAwayFieldGoal}>Away Field Goal</button>
      </div>
    </section>
  );
}

export default Buttons;
