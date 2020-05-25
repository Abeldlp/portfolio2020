import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

//Components Import
import SelfIntro from "./components/SelfIntro";
import Me from "./components/Me";
import About from "./components/About";
import Code from "./components/Code";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      <div className="app-main-screen">
        <Router>
          <SelfIntro />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" exact component={Me} />
              <Route path="/about" component={About} />
              <Route path="/code" component={Code} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </AnimatePresence>
        </Router>
      </div>
    );
  }
}
