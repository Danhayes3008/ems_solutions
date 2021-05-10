import React, { Fragment } from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./styles/scss/main.css";

// Components
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Schedules from "./components/Schedules"
import Requests from "./components/Requests"
import Exceptions from "./components/Exceptions"
import Payroll from "./components/Payroll"
import Forcasting from "./components/Forcasting"
import Personnel from "./components/Personnel"

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <div>
            <Navbar />
            <Route path="/home" component={Home} />
            <Route path="/schedules" component={Schedules} />
            <Route path="/requests" component={Requests} />
            <Route path="/exceptions" component={Exceptions} />
            <Route path="/payroll" component={Payroll} />
            <Route path="/forcasting" component={Forcasting} />
            <Route path="/personnel" component={Personnel} />
          </div>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
