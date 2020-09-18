import React from "react";
import {Flex} from "@chakra-ui/core";
import Header from "../components/sections/Header";
import InfoContainer from "../components/InfoContainer";
import {motion} from "framer-motion";
export default function Home() {
    return (
        <Flex
            direction="column"
            align="center"
            m="0 auto"
        >
            <Header/>
            <Flex
                gridGap={16}
                align="center"
                justify="center"
                direction={["column", "column", "column", "row"]}
                width="100%"
                backgroundImage="/images/team-rafiki.svg"
                p={[3, 3, 0, 0]}
            >
                <motion.div whileHover={{
                    scale: 1.05,
                    transition: {duration: 0.2},
                }}
                >
                    <InfoContainer title="Quais são os Benefícios?"
                                   list={["elemento1", "segundo elemento sdgsd sdhsdhssdhsd", "elemento 3 aqui", "mais coisas vêm aqui hehehehe", "eita lelê"]}
                                   image="/images/team-rafiki.svg"/>
                </motion.div>
            </Flex>
        </Flex>
    )
}
