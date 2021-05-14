import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Stats from "./pages/Stats"
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/core/Footer";
import { ModeContext } from "./contexts/ModeContext";
import { getChakraTheme } from "./ui/Theme";

const PageContainer = styled.div`
  margin: 3px 50px 3px 50px;
`;

const App = () => {
  const { mode } = useContext(ModeContext);
  const chakraTheme = getChakraTheme(mode);

  return (
    <ChakraProvider theme={chakraTheme}>
      <Router>
        <PageContainer>
          <NavBar />

          <Switch>
            <Route path={"/resume"}>
            </Route>
            <Route path={"/stats"}>
                <Stats />
            </Route>
            <Route path={"/portfolio"}>
                <Portfolio />
            </Route>
            <Route path={"/about"}>
                <About />
            </Route>
            <Route path={"/"}>
                <Home />
            </Route>
          </Switch>
        </PageContainer>
        <Footer showIcons={false} />
      </Router>
    </ChakraProvider>
  );
};

export default App;
