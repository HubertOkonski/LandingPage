import React from "react";
import Hand from "./../images/fingers.png";

function Start() {
  return (
    <div className="start">
      <div className="text-container">
        <h1>Poznaj Lorem Ipsum!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.{" "}
        </p>

        <div className="buttons-container">
          <button>O aplikacji</button>
          <button>Pobierz</button>
        </div>
      </div>

      <div className="hand-img-container">
        <img src={Hand} alt="" />
      </div>

      <div className="white-circle">
        <div className="orange-btn">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Start;
