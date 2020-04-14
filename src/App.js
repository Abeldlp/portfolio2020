import React from "react";
import "./App.css";
import Nav from "./pages/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
