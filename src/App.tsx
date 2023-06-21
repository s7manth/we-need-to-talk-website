import "./App.css";
import {
  Box,
  Container,
  Center,
  Divider,
  Heading,
  HStack,
  Text,
  WrapItem,
  Wrap,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { FaSmile, FaBolt, FaHeart, FaBrain } from "react-icons/fa";

import "@fontsource/merriweather/700-italic.css";

import HostCard from "./components/HostCard";
import CustomBox from "./components/CustomBox";

function App() {
  return (
    <Container>
      <Center>
        <HStack>
          <Box mt={2} mb={2}>
            <Text fontSize="5xl">🎙</Text>
          </Box>
          <Box m={1}>
            <Heading size="2xl" variant="headingStyle">
              We Need To Talk!
            </Heading>
            <Text size={"xs"}>THE PODCAST</Text>
          </Box>
        </HStack>
      </Center>

      <Box mt={4} mb={2}>
        <Divider variant="dividerStyle" />
        <Text variant="taglineStyle" as="b" color="yellow.900" fontSize="2xl">
          THE PREAMBLE OF A SERIOUS CONVERSATION IS ALWAYS FUNNY
        </Text>
        <Divider variant="dividerStyle" />
      </Box>

      <Box
        mt={4}
        pl={2}
        display={"flex"}
        alignItems="baseline"
        // borderLeftWidth={4}
        borderColor={"#62605D"}
      >
        <Text as={"b"} fontSize={"2xl"} color={"#62605D"}>
          The 4 Fundamentals
        </Text>
      </Box>
      <Box mt={4}>
        <Wrap spacing="40px" justify="center">
          <WrapItem>
            <CustomBox
              colorScheme={"lightmossgreen"}
              icon={FaSmile}
              title={"Happiness"}
              modalContent={
                "The {pursuit of a} state of well-being and contentment, fueled by positive " +
                "emotions and a sense of satisfaction."
              }
            />
          </WrapItem>
          <WrapItem>
            <CustomBox
              colorScheme={"lightsteelblue"}
              icon={FaBolt}
              title={"Fear"}
              modalContent={
                "A primal emotion that protects us from harm " +
                "and drives us to seek safety. Has the potential to blanket all the senses of a human being."
              }
            />
          </WrapItem>
          <WrapItem>
            <CustomBox
              colorScheme={"wisteria"}
              icon={FaBrain}
              title={"Self-Actualization"}
              modalContent={
                "The journey of personal growth, fulfillment, and " +
                "reaching our highest potential."
              }
            />
          </WrapItem>
          <WrapItem>
            <CustomBox
              colorScheme={"pastelpink"}
              icon={FaHeart}
              title={"Love"}
              modalContent={
                "The powerful force that connects us, brings joy, and " +
                "fosters a sense of belonging. Fear extinguishes, self actualisation" +
                  " kicks in. Songs' lyrics become relatable as seeds of happiness are planted."
              }
            />
          </WrapItem>
        </Wrap>
      </Box>
      <Divider mt={6} />
      <Box
        mt={4}
        pl={2}
        display="flex"
        alignItems="baseline"
        // borderLeftWidth={4}
        borderColor={"#62605D"}
      >
        <Text as={"b"} fontSize={"2xl"} color={"#62605D"}>
          Latest Episodes
        </Text>
      </Box>

      <Divider mt={6} />
      <Box
        mt={4}
        pl={2}
        display="flex"
        alignItems="baseline"
        // borderLeftWidth={4}
        borderColor={"#62605D"}
      >
        <Text as={"b"} fontSize={"2xl"} color={"#62605D"}>
          Hosts
        </Text>
      </Box>
      <Flex mt={4} flexWrap={"wrap"}>
        <HostCard
          name={"Shivang Gupta"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <Spacer />
        <HostCard
          name={"Sumanth Yalamarty"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </Flex>

      <Divider mt={6} />
      <Text mt={3}>
        © Copyright 2023. We Need To Talk. All Rights Reserved.
      </Text>
    </Container>
  );
}

export default App;
