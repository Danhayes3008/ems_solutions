import React, { Fragment } from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./styles/scss/main.css";

// Components
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Personnel from "./components/Personnel"
import Payroll from "./components/Payroll"

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <div>
            <Navbar />
            <Route path="/personnel" component={Personnel} />
            <Route path="/payroll" component={Payroll} />
          </div>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
