import React, { useState } from "react";
import "./App.scss";
import "./Media.scss";
import Header from "./components/Header";
import Start from "./components/Start";
import ModalContainer from "./components/ModalContainer";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [regModal, setRegModalStatus] = useState(true);
  const [logModal, setLogModalStatus] = useState(true);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <ModalContainer
              status={logModal}
              setStatus={setLogModalStatus}
              header={"Panel logowania"}
              button={"Zaloguj się"}
            />
          </Route>
          <Route path="/register">
            <ModalContainer
              status={regModal}
              setStatus={setRegModalStatus}
              header={"Panel rejestracji"}
              button={"Zarejestruj się"}
            />
          </Route>
        </Switch>
        <div className="bg-container">
          <Container className="wider">
            <Header
              setRegStatus={setRegModalStatus}
              setLogStatus={setLogModalStatus}
            />
            <Start />
          </Container>
        </div>
        <HowItWorks />
        <Pricing />
      </Router>
    </div>
  );
}

export default App;
