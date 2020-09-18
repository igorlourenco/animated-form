import React, {useRef} from "react";
import {useRouter} from "next/router";
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

import Input from "../components/Input";
import {useForm} from "react-hook-form";
import {INDEX, LOGIN} from "../consts/routes";

export default function Register() {
    const router = useRouter();

    const formRef = useRef( null );

    const [show, setShow] = React.useState( false );
    const handleClick = () => setShow( !show );

    const [loading, setLoading] = React.useState( false );
    const handleLoading = () => setLoading( !loading );

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        handleLoading();
        console.log( data )
        // setTimeout( () => {handleLoading()}, 2000 ); // falta dar certo aqui
        router.replace( INDEX );
    };

    return (
        <Grid
            as="main"
            height="100vh"
            templateColumns={["1fr 95% 1fr", "1fr 95% 1fr", "1fr 70% 1fr", "1fr 45% 1fr"]}
            templateRows="1fr 100% 1fr"
            templateAreas="
            '. heading .'
            '. form .'
            '. . .'
            "
            justifyContent="center"
            alignItems="center"
        >
            <Flex gridArea="heading" flexDir="column" align="center" marginTop="35px">
                <Heading size="2xl" lineHeight="shorter"> Emplo </Heading>
            </Flex>

            <Flex gridArea="form" height="auto" backgroundColor="gray.700"
                  borderRadius="md"
                  flexDir="column"
                  alignItems="stretch"
                  px={[5, 5, 16, 16]}
                  py={4}
            >
                <Flex alignItems="center" marginBottom={3} py={2}>
                    <Heading size="lg">Registre-se</Heading>
                </Flex>

                <form onSubmit={handleSubmit( onSubmit )} ref={formRef}>
                    <Input
                        name="name"
                        placeholder="Nome"
                        ref={register}
                    />

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
                        />
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

                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="gray.300"
                    marginTop={6}
                >
                    Já tem conta? {" "}
                    <Link
                        color="teal.600"
                        fontWeight="bold"
                        _hover={{
                            color: "teal.400"
                        }}
                        href={LOGIN}
                    >
                        Faça seu login.
                    </Link>
                </Text>
            </Flex>
        </Grid>
    )
}
