import React, { useRef } from "react";
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
import { useForm } from "react-hook-form";

export default function Login() {
    const formRef = useRef(null);

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const [loading, setLoading] = React.useState(false);
    const handleLoading = () => setLoading(!loading);

    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        handleLoading();
        console.log(data)
        setTimeout(handleLoading, 2000); // falta dar certo aqui
    };

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
                <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <Input
                        name="email"
                        placeholder="E-mail"
                        ref={register}
                    />

                    <InputGroup>
                        <Input
                            name="password"
                            type={show ? "text" : "password"}
                            placeholder="Senha"
                            ref={register}
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

                    <Button
                        isLoading={loading}
                        backgroundColor="teal.500"
                        width="100%"
                        height="50px"
                        type="submit"
                        borderRadius="sm"
                        marginTop={6}
                        _hover={{
                            backgroundColor: "teal.600"
                        }}
                    >
                        Entrar
                    </Button>

                </form>

                <Link
                    textAlign="center"
                    marginTop={4}
                    fontSize="sm"
                    color="teal.600"
                    fontWeight="bold"
                    _hover={{
                        color: "teal.400"
                    }}
                >
                    Esqueci minha senha
                </Link>

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
