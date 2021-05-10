import React, { Fragment } from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./styles/scss/main.css";

// Components
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Schedules from "./components/Schedules"
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
            <Route path="/" />
            <Route path="/schedules" component={Schedules} />
            <Route path="/payroll" component={Payroll} />
            <Route path="/personnel" component={Personnel} />
          </div>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
