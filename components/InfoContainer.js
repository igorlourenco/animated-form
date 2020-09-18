import React from "react";
import {Box, Flex, Heading, Image, Stack} from "@chakra-ui/core";

InfoContainer.defaultProps = {
    title: "Aqui vai alguma coisa",
    subtitle:
        "Nesse lugar, vou escrever sobre alguma coisa que possa chamar atenção dos possíveis usuários",
    image: "",
}

export default function InfoContainer({title, subtitle, image, ...rest}) {
    return (
        <Flex
            shadow="2xl"
            borderRadius="md"
            backgroundColor="gray.800"
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={[1, 1, 8, 8]}
            mb={16}
            {...rest}
        >
            <Stack
                spacing={4}
                w={{ base: "80%", md: "50%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    textAlign={["center", "center", "left", "left"]}
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                    {subtitle}
                </Heading>
            </Stack>
            <Box w={{ base: "80%", sm: "70%", md: "40%", lg: "40%" }} mb={{ base: 12, md: 0 }} borderRadius="md" backgroundColor="gray.700">
                <Image src="/images/team-rafiki.svg" size="100%" shadow="2xl" />
            </Box>
        </Flex>
    )
}