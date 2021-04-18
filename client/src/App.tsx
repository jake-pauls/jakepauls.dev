import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import styled from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/Footer";
import { ModeContext } from "./contexts/ModeContext";
import { getChakraTheme } from "./ui/Theme";

const PageContainer = styled.div`
  margin: 5px 75px 5px 60px;
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
        <Footer showIcons={false} />
      </Router>
    </ChakraProvider>
  );
};

export default App;