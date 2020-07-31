import React from "react";
import Checkmark from "./Checkmark";
import { ReactComponent as Phone } from "./../images/phone.svg";
function PricingBoxLg() {
  return (
    <div className="pricing-box">
      <div className="pricing-box-header lg-box-header">
        <span>
          Lorem ipsum <br />
          <span>dolor sit amet</span>
        </span>
        <Phone />
      </div>
      <div className="pricing-box-header part-two-pricing part-two-boxlg">
        <div className="basic sm-box">
          <p>Basic</p>
          <p>
            wersja <br /> darmowa
          </p>
        </div>
        <div className="premium sm-box">
          <p>Premium</p>
        </div>
      </div>
      <div className="list-container">
        <ul>
          <li>
            Lorem ipsum <Checkmark />
          </li>
          <li>
            dolor sit amet, consectetur
            <Checkmark />
          </li>
          <li>
            adipiscing elit, sed do eiusmod
            <Checkmark />
          </li>
          <li>
            tempor incididunt
            <Checkmark />
          </li>
          <li>
            ut labore et dolore magna aliqua
            <Checkmark />
          </li>
          <li>
            Lorem ipsum
            <Checkmark />
          </li>
          <li>
            Ipsum dolor sit amet
            <Checkmark />
          </li>
          <li>
            ut labore et dolore magna aliqua
            <Checkmark />
          </li>
        </ul>
        <footer className="register-try-box">
          <div className="buttons-container">
            <p>Zarejestruj się i wypróbuj!</p>
            <button className="rg-button">Rejestracja</button>
            <button className="lg-button">Logowanie</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default PricingBoxLg;
