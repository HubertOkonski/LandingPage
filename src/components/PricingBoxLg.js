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
      <div className="pricing-box-header part-two-pricing part-two-boxlg"></div>
      <div className="flexbox-container">
        <div className="list-container">
          <ul>
            <li>Lorem ipsum</li>
            <li>dolor sit amet, consectetur</li>
            <li>adipiscing elit, sed do eiusmod</li>
            <li>tempor incididunt</li>
            <li>ut labore et dolore magna aliqua</li>
            <li>Lorem ipsum</li>
            <li>Ipsum dolor sit amet</li>
            <li>ut labore et dolore magna aliqua</li>
          </ul>
          <footer className="register-try-box">
            <div className="buttons-container">
              <p>Zarejestruj się i wypróbuj!</p>
              <button className="rg-button">Rejestracja</button>
              <button className="lg-button">Logowanie</button>
            </div>
          </footer>
        </div>
        <div className="basic sm-box">
          <p>Basic</p>
          <p>
            wersja <br /> darmowa
          </p>
          <div className="checkmark-container">
            <Checkmark />
            <Checkmark />
            <Checkmark />
            <Checkmark />
            <span className="times"> &#215;</span>
            <span className="times"> &#215;</span>
            <span className="times"> &#215;</span>
          </div>
        </div>
        <div className="premium sm-box">
          <p>Premium</p>
          <select name="hall" id="hall" value="0">
            <option>90 dni</option>
            <option>60 dni</option>
            <option>30 dni</option>
          </select>
          <p>
            79,99zł <span className="sale-span">- 30% taniej</span>{" "}
          </p>
          <div className="checkmark-container">
            <Checkmark />
            <Checkmark />
            <Checkmark />
            <Checkmark />
            <Checkmark />
            <Checkmark />
            <Checkmark />
            <Checkmark />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingBoxLg;
