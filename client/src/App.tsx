import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import styled from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { ModeContext } from "./contexts/ModeContext";
import { getChakraTheme } from "./ui/Theme";

const PageContainer = styled.div`
  margin: 10px 20px 10px 20px;
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
            <Route path={"/about"}>
                <About />
            </Route>
            <Route path={"/"}>
                <Home />
            </Route>
          </Switch>
        </PageContainer>
      </Router>
    </ChakraProvider>
  );
};

export default App;