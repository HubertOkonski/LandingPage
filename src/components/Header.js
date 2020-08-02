import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  const handleMobileMenuClick = (e) => {
    if (e.currentTarget === e.target.parentNode) {
      document.getElementById("menu-mb").classList.toggle("hidden");
      e.target.parentNode.classList.toggle("change");
    } else if (e.target.classList[0] === "menu-trigger") {
      document.getElementById("menu-mb").classList.toggle("hidden");
      e.target.classList.toggle("change");
    }
  };
  const handleLogingModal = () => {
    console.log("elo");
    props.setLogStatus(true);
  };
  const handleRegistergModal = () => {
    console.log("elo");
    props.setRegStatus(true);
  };
  return (
    <header className="header">
      <nav className="mobile-menu">
        <div className="mobile-menu-container hidden" id="menu-mb">
          <ul>
            <li>
              <Link to="/start">Start</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/howitworks">Jak to działa?</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/pricing">Cennik</Link>
            </li>
            <li>
              <Link to="/login" onClick={handleLogingModal}>
                Logowanie
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/register" onClick={handleRegistergModal}>
                Rejestracja
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-trigger" onClick={(e) => handleMobileMenuClick(e)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </nav>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/start">Start</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/howitworks">Jak to działa?</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/pricing">Cennik</Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogingModal}>
              Logowanie
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/register" onClick={handleRegistergModal}>
              Rejestracja
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logo">LOGO</div>
    </header>
  );
}

export default Header;
