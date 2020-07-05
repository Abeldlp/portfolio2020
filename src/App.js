import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Responsive } from "./Responsive";

//Components Import
import SelfIntro from "./components/SelfIntro";
import Me from "./components/Me";
import About from "./components/About";
import Code from "./components/Code";
import Contact from "./components/Contact";

//Import project selfpages
import Fitness from "./components/Fitness";
import Construction from "./components/Construction";
import School from "./components/School";
//Mobile Components
import SelfIntroMobile from "./components/mobile/SelfIntroMobile";

export default class App extends Component {
  render() {
    return (
      <div className="app-main-screen">
        {/*THIS IS SHOWN IF THE DEVICE IS A LAPTOP OR BIGGER*/}
        <Responsive displayIn={["Laptop", "LargerThanLaptop"]}>
          <>
            <Router>
              <SelfIntro />
              <AnimatePresence exitBeforeEnter>
                <Switch>
                  <Route path="/" exact component={Me} />
                  <Route path="/about" component={About} />
                  <Route path="/code" exact component={Code} />
                  <Route path="/code/fitness" component={Fitness} />
                  <Route path="/code/construction" component={Construction} />
                  <Route path="/code/school" component={School} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </AnimatePresence>
            </Router>
          </>
        </Responsive>
        {/*THIS IS SHOWN IF THE DEVICE IS A TABLET*/}
        <Responsive displayIn={["Tablet"]}>
          <>
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
          </>
        </Responsive>
        {/*THIS IS SHOWN IF THE DEVICE IS A MOBILE DEVICE*/}
        <Responsive displayIn={["Mobile"]}>
          <>
            <Router>
              <SelfIntroMobile />
              <AnimatePresence exitBeforeEnter>
                <Switch>
                  {/*<Route path="/" exact component={Me} />
                  <Route path="/about" component={About} />
                  <Route path="/code" component={Code} />
                  <Route path="/contact" component={Contact} />*/}
                </Switch>
              </AnimatePresence>
            </Router>
          </>
        </Responsive>
      </div>
    );
  }
}
