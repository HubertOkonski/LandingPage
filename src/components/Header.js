import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            {" "}
            <a href="">Start</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">Jak to działa?</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">Cennik</a>
          </li>
          <li>
            <a href="">Logowanie</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">Rejestracja</a>
          </li>
        </ul>
      </nav>
      <div className="logo">LOGO</div>
    </header>
  );
}

export default Header;
