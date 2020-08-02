import React from "react";
import { ReactComponent as Iphone } from "./../images/Iphone.svg";
function IphoneContainer(props) {
  return (
    <div className={`how-it-works iphone${props.number}`}>
      <img src={props.arrow} alt="" srcSet="" />
      <Iphone
        className="iphone-svg"
        style={{
          transform: `rotate(${props.deg}deg)`,
        }}
      />
      <div className="hiw-text">
        <div className="gradient-text-container">
          <span>{props.number}</span>
          <div>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
    </div>
  );
}

export default IphoneContainer;
