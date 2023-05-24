import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Center,
  Heading,
  Container,
  
} from "@chakra-ui/react"
import { AspectRatio } from '@chakra-ui/react'

import { PhoneIcon, AddIcon, MinusIcon, WarningIcon } from '@chakra-ui/icons'

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'







export const App = () => (


    <Container as="section">
      
    <center>
    <Heading my= "60px" p="30px">
      Antons cool website
    </Heading>


    <Text marginLeft="30px">
      Hello there... And welcome to my website. Here you will find a portefolie of my recent coding projects. Enjoy! Test 
    </Text>
    </center>
    </Container>
 
) 
