import React from "react";
import { ReactComponent as Phone } from "./../images/phone.svg";
import Checkmark from "./Checkmark";
import appStore from "./../images/appStore.jpg";
import googlePlay from "./../images/googlePlay.jpg";
function PricingBoxSm() {
  return (
    <div className="pricing-box">
      <div className="pricing-box-header">
        <span>
          Lorem ipsum <br />
          <span>Dolor</span>
        </span>
        <Phone />
      </div>
      <div className="pricing-box-header part-two-pricing">
        <p>Za darmo</p>
        <p>na zawsze!</p>
      </div>
      <div className="list-container sm-box-list">
        <ul>
          <li>
            <Checkmark />
            Lorem ipsum
          </li>
          <li>
            <Checkmark />
            dolor sit amet, consectetu
          </li>
          <li>
            <Checkmark />
            adipiscing elit, sed do eiusmod
          </li>
          <li>
            <Checkmark />
            tempor incididunt
          </li>
          <li>
            <Checkmark />
            ut labore et dolore
          </li>
          <li>
            <Checkmark />
            magna aliqua
          </li>
        </ul>
        <footer className="join-apps-box">
          <p>Dołącz do zabawy już dziś!</p>
          <div className="download-images-container">
            <img src={appStore} alt="" srcSet="" />
            <img src={googlePlay} alt="" srcSet="" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default PricingBoxSm;
