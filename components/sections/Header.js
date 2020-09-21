import React from "react";
import {Flex, Heading, Link, Text} from "@chakra-ui/core";

export default function Header() {
    const [show, setShow] = React.useState( false )
    const toggleMenu = () => setShow( !show )

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={3}
            pr={6}
            bg="transparent"
            color="white"
        >
            <Flex align="center">
                <Heading
                    size="xl"
                    color="white"
                >
                    Formulário animado
                </Heading>
            </Flex>

        </Flex>
    )
}