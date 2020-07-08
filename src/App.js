import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Responsive } from "./Responsive";

//BACK TO TOP
import ScrollToTop from "./components/ScrollToTop";

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
import SalarySystem from "./components/SalarySystem";

//Mobile Components
import SelfIntroMobile from "./components/mobile/SelfIntroMobile";
import IntroMobile from "./components/mobile/IntroMobile";
import MeMobile from "./components/mobile/MeMobile";
import AboutMobile from "./components/mobile/AboutMobile";
import ContactMobile from "./components/mobile/ContactMobile"
import CodeMobile from "./components/mobile/CodeMobile"

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
                  <Route path="/code/salarysystem" component={SalarySystem} />
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
              <ScrollToTop />
              <SelfIntroMobile />
              <AnimatePresence exitBeforeEnter>
                <Switch>
                  <Route path="/" exact component={IntroMobile} />
                  <Route path="/me" component={MeMobile} />
                  <Route path="/about/mobile" component={AboutMobile} />
                  <Route path="/contact" component={ContactMobile} />
                  <Route path="/projects" component={CodeMobile} />
                </Switch>
              </AnimatePresence>
            </Router>
          </>
        </Responsive>
      </div>
    );
  }
}
