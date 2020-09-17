import React from "react";
import {Box, Button, Flex, Heading, Icon, Link, Text} from "@chakra-ui/core";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {HOME, LOGIN} from "../../consts/routes";

const MenuItems = props => {
    const {children, isLast, to = "/", ...rest} = props
    return (
        <Text
            mb={{base: 0, sm: 0}}
            mr={{base: 0, sm: isLast ? 0 : 8}}
            fontSize="20px"
            {...rest}

        >
            <Link href={to}>{children}</Link>
        </Text>
    )
}

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
            bg="teal.500"
            color="white"
        >
            <Flex align="center">
                <Heading size="xl"
                         color="white"
                >Emplo</Heading>
            </Flex>

            <Box display={{base: "block", md: "none"}} onClick={toggleMenu}>
                {show ? <Icon name={AiOutlineMenu}/> : <Icon name={AiOutlineClose}/>}
            </Box>

            <Box
                display={{base: show ? "block" : "none", md: "block"}}
                flexBasis={{base: "100%", md: "auto"}}
            >
                <Flex
                    align="center"
                    justify={["center", "center", "flex-end", "flex-end"]}
                    direction={["column", "column", "row", "row"]}
                    pt={[6, 6, 0, 0]}
                >
                    <MenuItems to={HOME}>Home</MenuItems>
                    <MenuItems to={LOGIN} isLast>Login</MenuItems>
                </Flex>
            </Box>
        </Flex>
    )
}