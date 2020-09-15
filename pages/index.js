import React from "react";
import { Heading, Link } from "@chakra-ui/core";
import {LOGIN} from "../consts/routes";

export default function Home() {
  return (
      <>
        <Heading> Página Home </Heading>
        <Link href={LOGIN}>FAZER LOGIN</Link>
      </>
  )
}
