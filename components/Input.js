import React from "react";
import { Input as ChakraInput } from "@chakra-ui/core";

export default function Input (props){
    return (
    <ChakraInput
        height="50px"
        backgroundColor="gray.900"
        focusBorderColor="teal.500"
        borderRadius="sm"
        {...props}
    />
    )
}