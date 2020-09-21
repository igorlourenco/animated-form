import React from "react";
import {Flex} from "@chakra-ui/core";
import Header from "../components/sections/Header";
import Login from "../components/sections/Login";

export default function Home() {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
        >
            <Header/>
            <Login/>

        </Flex>
    )
}
