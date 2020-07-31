import React from "react";
import IphoneContainer from "./IphoneContainer";
import Arrow1 from "./../images/arrow1.svg";
import Arrow2 from "./../images/arrow2.svg";
import Arrow3 from "./../images/arrow3.svg";
function HowItWorks() {
  return (
    <div className="how-it-works-container container narrower">
      <h1>Jak to działa?</h1>
      <div className="how-it-works-flow">
        <div className="how-it-works-horizontal-container">
          <IphoneContainer deg={-15} number={1} />
          <IphoneContainer number={2} arrow={Arrow1} />
        </div>
        <div className="how-it-works-horizontal-container">
          <IphoneContainer number={3} arrow={Arrow2} />
          <IphoneContainer deg={-75} number={4} arrow={Arrow3} />
        </div>
      </div>
      <footer>
        <p>Lorem ipsum!</p>
      </footer>
    </div>
  );
}

export default HowItWorks;
