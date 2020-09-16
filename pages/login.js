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
import {HOME, REGISTER} from "../consts/routes";

export default function Login() {
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
        router.replace( HOME );
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
            <Flex gridArea="heading" flexDir="column" align="center" height="auto" marginTop={4}>
                <Heading size="2xl" lineHeight="shorter"> Emplo </Heading>
            </Flex>

            <Flex gridArea="form" height="auto" backgroundColor="gray.700"
                  borderRadius="md"
                  flexDir="column"
                  alignItems="stretch"
                  px={[5, 5, 16, 16]}
                  py={5}
            >
                <Flex alignItems="center" marginBottom={3} py={2}>
                    <Heading size="lg">Login</Heading>
                </Flex>

                <form onSubmit={handleSubmit( onSubmit )} ref={formRef}>
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
                        color="teal.600"
                        fontWeight="bold"
                        href={REGISTER}
                        _hover={{
                            color: "teal.400"
                        }}
                    >
                        Registre-se
                    </Link>
                </Text>
            </Flex>
        </Grid>
    )
}
