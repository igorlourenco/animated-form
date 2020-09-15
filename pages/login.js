import React, {useState} from "react";
import {
    Button,
    Flex,
    Grid,
    Heading, IconButton,
    InputGroup,
    InputRightElement,
    Link,
    Text
} from "@chakra-ui/core";

import  { FaGoogle } from "react-icons/fa";

import Divider from "../components/Divider";
import Input from "../components/Input";

export default function Login() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const [loading, setLoading] = React.useState(false);
    const handleLoading = () => setLoading(!loading);

    return (
        <Grid
            as="main"
            height="100vh"
            templateColumns={["1fr 95% 1fr", "1fr 95% 1fr", "1fr 70% 1fr", "1fr 45% 1fr"]}
            templateRows="1fr 80% 1fr"
            templateAreas="
            '. heading .'
            '. form .'
            '. footer .'
            "
            justifyContent="center"
            alignItems="center"
        >
            <Flex gridArea="heading" flexDir="column" align="center" marginTop="35px">
                <Heading size="2xl" lineHeight="shorter"> Emplo </Heading>
            </Flex>

            <Flex gridArea="form" height={["100%", "100%", "100%", "80%"]} backgroundColor="gray.700"
                  borderRadius="md"
                  flexDir="column"
                  alignItems="stretch"
                  padding={[5, 5, 16, 16]}
            >
                <Input
                    placeholder="E-mail"
                />

                <InputGroup>
                <Input
                    type={show ? "text" : "password"}
                    placeholder="Senha"
                    marginTop={2}/>
                    <InputRightElement marginTop={3} marginX={2}>
                        <IconButton
                            aria-label={show ? "view-off" : "view"}
                            icon={show ? "view-off" : "view"}
                            onClick={() => handleClick()}
                            borderColor="gray.500"
                            color="white"
                            _hover={{
                                color: "teal.500"
                            }}
                        />
                    </InputRightElement>
                </InputGroup>

                <Link
                    alignSelf="flex-start"
                    marginTop={2}
                    fontSize="sm"
                    color="teal.600"
                    fontWeight="bold"
                    _hover={{
                        color: "teal.400"
                    }}
                >
                    Esqueci minha senha
                </Link>

                <Button
                    isLoading={loading} // aqui
                    backgroundColor="teal.500"
                    height="50px"
                    borderRadius="sm"
                    marginTop={6}
                    onClick={() => handleLoading()} // continuar daqui
                    _hover={{
                        backgroundColor: "teal.600"
                    }}
                >
                    Entrar
                </Button>

                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="gray.300"
                    marginTop={6}
                >
                    Não tem uma conta? {" "}
                    <Link
                        color="teal.500"
                        fontWeight="bold"
                        _hover={{
                            color: "teal.400"
                        }}
                    >
                        Registre-se
                    </Link>
                </Text>

                <Divider></Divider>

                <Flex alignItems="center">
                    <Button
                        leftIcon={FaGoogle}
                        height="50px"
                        flex="1"
                        backgroundColor="gray.600"
                        mx={6}
                        borderRadius="sm"
                        _hover={{
                            backgroundColor: "teal.500"
                        }}
                    >
                        Ou entre com Google
                    </Button>
                </Flex>
            </Flex>

            <Flex gridArea="footer" flexDir="column" align="center" my="15px">
            </Flex>

        </Grid>
    )
}
