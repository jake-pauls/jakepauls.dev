import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Switch>
          <Route path={"/about"}>
              <About />
          </Route>
          <Route path={"/"}>
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;