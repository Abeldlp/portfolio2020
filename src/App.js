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
import Ilustration from "./components/Ilustration"

//Import project selfpages
import Fitness from "./components/Fitness";
import Construction from "./components/Construction";
import School from "./components/School";
import SalarySystem from "./components/SalarySystem";
import LaFerrari from "./components/LaFerrari";

//Mobile Components
import SelfIntroMobile from "./components/mobile/SelfIntroMobile";
import IntroMobile from "./components/mobile/IntroMobile";
import MeMobile from "./components/mobile/MeMobile";
import AboutMobile from "./components/mobile/AboutMobile";
import ContactMobile from "./components/mobile/ContactMobile";
import CodeMobile from "./components/mobile/CodeMobile";
import FitnessMobile from "./components/mobile/FitnessMobile";
import SchoolMobile from "./components/mobile/SchoolMobile";
import ConstructionMobile from "./components/mobile/ConstructionMobile";
import SalaryManagerMobile from "./components/mobile/SalaryManagerMobile";
import LaFerrariMobile from "./components/mobile/LaFerrariMobile";
import IlustrationMobile from "./components/mobile/IlustrationMobile"

export default class App extends Component {
  render() {
    return (
      <div className="app-main-screen">
        {/*THIS IS SHOWN IF THE DEVICE IS A LAPTOP OR BIGGER*/}
        <Responsive displayIn={["Laptop", "LargerThanLaptop"]}>
          <>
            <Router>
            <ScrollToTop />
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
                  <Route path="/code/laferrari" component={LaFerrari} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/ilustrations" component={Ilustration} />
                </Switch>
              </AnimatePresence>
            </Router>
          </>
        </Responsive>
        {/*THIS IS SHOWN IF THE DEVICE IS A TABLET*/}
        <Responsive displayIn={["Tablet"]}>
          <>
            <Router>
            <ScrollToTop />
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
                  <Route path="/code/laferrari" component={LaFerrari} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/ilustrations" component={Ilustration} />
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
                  <Route path="/ilustrations" component={IlustrationMobile} />
                  <Route path="/projects" exact component={CodeMobile} />
                  <Route
                    path="/projects/fitnessapp"
                    component={FitnessMobile}
                  />
                  <Route path="/projects/school" component={SchoolMobile} />
                  <Route
                    path="/projects/constructionfjd"
                    component={ConstructionMobile}
                  />
                  <Route
                    path="/projects/salarymanager"
                    component={SalaryManagerMobile}
                  />
                  <Route
                    path="/projects/laferrari"
                    component={LaFerrariMobile}
                  />
                </Switch>
              </AnimatePresence>
            </Router>
          </>
        </Responsive>
      </div>
    );
  }
}
