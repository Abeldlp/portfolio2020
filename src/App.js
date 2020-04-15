import React from "react";
import "./App.css";
import Nav from "./pages/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Digimondetails from "./pages/Digimondetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Digimondetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
