import React from "react";
import {Box, Flex, Heading, Icon, Image, Stack} from "@chakra-ui/core";
import Login from "./sections/Login";
import {motion} from "framer-motion";

InfoContainer.defaultProps = {
    title: "Título Padrão 1",
    list: ["elemento1", "segundo elemento", "elemento 3 aqui", "mais coisas vêm aqui", "eita lelê"],
    image: "/images/team-rafiki.svg",
}

const mountList = (list) => {
    return (
        list.map( (list_element) => {
            return (
                <Heading
                    as="h2"
                    size="md"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign="left"
                >
                    <Icon name="check" size="24px" color="teal.500"/> {"  "} {list_element}
                </Heading>
            )
        } )

    )
}

export default function InfoContainer({title, list, image, ...rest}) {
    return (
        <Flex
            shadow="md"
            borderRadius="md"
            backgroundColor="gray.800"
            align="center"
            justify="space-around"
            direction={{base: "column-reverse", md: "row"}}
            wrap="no-wrap"
            width="160vh"
            p={[3, 3, 8, 8]}
            mb={[1, 1, 0, 0]}
            {...rest}
        >
            <Image src="/images/team-rafiki.svg" size="35%"/>

            <Stack
                spacing={4}
                w={{base: "90%", md: "35%"}}
                verticalAlign="center"
                align="flex-start"
            >
                {mountList( list )}
            </Stack>

            <motion.div
                        whileTap={{
                            scale: 0.95,
                            transition: {duration: 0.2},
                        }}
            >
            <Login/>
            </motion.div>
        </Flex>
    )
}