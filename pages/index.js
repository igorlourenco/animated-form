import React from "react";
import {Flex, Heading} from "@chakra-ui/core";
import Header from "../components/sections/Header";

export default function Home() {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
        >
            <Header/>
        </Flex>
    )
}
