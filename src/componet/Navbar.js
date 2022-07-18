
import { background, Box, Flex } from "@chakra-ui/react"
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import React, { useState } from 'react';

export default function Navbar() {

 const [text, setText] = useState("black");
 function ok(){
  console.log("hello");
  // alert("hello world!!")
  setText(
   { backgroundColor:'blue'}
  )
 }
  return (
    <>
    <Flex align="center" justify="center">
<UnorderedList display="flex" listStyleType="none" justifyContent="space-around">
  <ListItem mr="2rem">Home</ListItem>
  <ListItem mr="2rem">About</ListItem>
  <ListItem mr="2rem">Contact</ListItem>
</UnorderedList>
</Flex>

<Textarea placeholder='Here is a sample placeholder' />
<button onClick={ok}>click</button>

    </>

  )
}
