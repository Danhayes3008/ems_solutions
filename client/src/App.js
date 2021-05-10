import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./styles/scss/main.css";

// Components
import Navbar from "./components/Navbar"
import Personnel from "./components/Personnel"
import Payroll from "./components/Payroll"

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route path="/personnel" component={Personnel} />
        <Route path="/payroll" component={Payroll} />
      </Fragment>
    </Router>
  );
}

export default App;
