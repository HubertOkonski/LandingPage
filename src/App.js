import React from "react";
import "./App.scss";
import "./Media.css";
import Header from "./components/Header";
import Start from "./components/Start";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <Container className="wider">
          <Header />
          <Start />
        </Container>
      </div>

      <HowItWorks />
      <Pricing />
    </div>
  );
}

export default App;
