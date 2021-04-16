import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Home from "./pages/Home";
import About from "./pages/About";
import { ModeContext } from "./contexts/ModeContext";
import { getChakraTheme } from "./ui/Theme";

const App: React.FC = () => {
  const { mode } = useContext(ModeContext);
  const chakraTheme = getChakraTheme(mode);

  return (
    <ChakraProvider theme={chakraTheme}>
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
    </ChakraProvider>
  );
};

export default App;