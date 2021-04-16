import React from "react";
import { Heading } from "@chakra-ui/react";
import ModeToggle from "../components/ModeToggle";

const Home = () => {
    return (
        <div>
            <ModeToggle />
            <Heading color="brand.100">Home</Heading>
        </div>
    );
};

export default Home;