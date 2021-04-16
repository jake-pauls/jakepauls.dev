import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link as RouteLink } from "react-router-dom";
import { ChakraProvider, Container, Link } from "@chakra-ui/react";

import Home from "./pages/Home";
import About from "./pages/About";
import ModeToggle from "./components/ModeToggle";
import { ModeContext } from "./contexts/ModeContext";
import { getChakraTheme } from "./ui/Theme";

const App: React.FC = () => {
  const { mode } = useContext(ModeContext);
  const chakraTheme = getChakraTheme(mode);

  return (
    <ChakraProvider theme={chakraTheme}>
      <Router>
        <Container>
          <Link as={RouteLink} to="/" color="base.text">Home</Link>
          <Link as={RouteLink} to="/about" color="base.text">About</Link>
          <ModeToggle />

          <Switch>
            <Route path={"/about"}>
                <About />
            </Route>
            <Route path={"/"}>
                <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
};

export default App;