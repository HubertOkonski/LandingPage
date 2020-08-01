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
      <div className="grid-container">
        <div className="basic sm-box">
          <p>Basic</p>
          <p>
            wersja <br /> darmowa
          </p>
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
        </div>
        <div className="line-container"></div>
        <li>Lorem ipsum</li>
        <div className="checkmark-container checkmark-container-basic">
          <Checkmark />
        </div>
        <div className="checkmark-container checkmark-container-premium">
          <Checkmark />
        </div>
        <li>dolor sit amet, consectetur</li>
        <div className="checkmark-container checkmark-container-basic">
          <Checkmark />
        </div>
        <div className="checkmark-container checkmark-container-premium">
          <Checkmark />
        </div>
        <li>adipiscing elit, sed do eiusmod</li>
        <div className="checkmark-container checkmark-container-basic">
          <Checkmark />
        </div>
        <div className="checkmark-container checkmark-container-premium">
          <Checkmark />
        </div>
        <li>tempor incididunt</li>
        <div className="checkmark-container checkmark-container-basic">
          <Checkmark />
        </div>
        <div className="checkmark-container checkmark-container-premium">
          <Checkmark />
        </div>
        <li>ut labore et dolore magna aliqua</li>
        <div className="checkmark-container checkmark-container-basic times-container-basic">
          &#215;
        </div>
        <div className="checkmark-container checkmark-container-premium">
          <Checkmark />
        </div>
        <li>Lorem ipsum</li>
        <div className="checkmark-container checkmark-container-basic times-container-basic">
          &#215;
        </div>
        <div className="checkmark-container checkmark-container-premium">
          <Checkmark />
        </div>
        <li>Ipsum dolor sit amet</li>
        <div className="checkmark-container checkmark-container-basic times-container-basic">
          &#215;
        </div>
        <div className="checkmark-container checkmark-container-premium">
          <Checkmark />
        </div>
        <li>ut labore et dolore magna aliqua</li>
        <div className="checkmark-container checkmark-container-basic times-container-basic">
          &#215;
        </div>
        <div className="checkmark-container checkmark-container-premium">
          <Checkmark />
        </div>
      </div>
      <div className="buttons-container">
        <p>Zarejestruj się i wypróbuj!</p>
        <button className="rg-button">Rejestracja</button>
        <button className="lg-button">Logowanie</button>
      </div>
    </div>
  );
}

export default PricingBoxLg;

/*
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
        </div>

<footer className="register-try-box">
            <div className="buttons-container">
              <p>Zarejestruj się i wypróbuj!</p>
              <button className="rg-button">Rejestracja</button>
              <button className="lg-button">Logowanie</button>
            </div>
          </footer>


        */
