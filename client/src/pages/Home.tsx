import React from "react";
import { Heading } from "@chakra-ui/react";
import ModeToggle from "../components/ModeToggle";

const Home = () => {
    return (
        <div>
            <ModeToggle />
            <Heading color="base.text">Home</Heading>
        </div>
    );
};

export default Home;