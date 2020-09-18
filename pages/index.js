import React from "react";
import {Flex, Heading} from "@chakra-ui/core";
import Header from "../components/sections/Header";
import InfoContainer from "../components/InfoContainer";

export default function Home() {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
        >
            <Header/>
            <InfoContainer/>
        </Flex>
    )
}
