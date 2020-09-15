import React, { forwardRef } from "react";
import { Input as ChakraInput } from "@chakra-ui/core";

function Input (props, ref){
    return (
    <ChakraInput
        height="50px"
        backgroundColor="gray.900"
        focusBorderColor="teal.500"
        borderRadius="sm"
        ref={ref}
        {...props}
    />
    )
}

export default forwardRef(Input);