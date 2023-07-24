import {
  Accordion,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import CustomBox from "../components/CustomBox.tsx";
import {
  FaBrain,
  FaArchive,
  FaGhost,
  FaHeart,
  FaSmile,
  FaYoutube,
} from "react-icons/fa";
import CustomAccordionItem from "../components/CustomAccordionItem.tsx";
import VideoCard from "../components/VideoCard.tsx";
import HostCard from "../components/HostCard.tsx";
import { Icon } from "@chakra-ui/icons";
import youtubedata from "../data/youtubedata.ts";

const HomePage = () => {
  return (
    <Container>
      <Center>
        <HStack mt={3}>
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
        <Text as={"b"} fontSize={"2xl"} color={"#62605D"} fontFamily={"Hind"}>
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
              icon={FaGhost}
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
        <Text as={"b"} fontSize={"2xl"} color={"#62605D"} fontFamily={"Hind"}>
          Latest Episodes
        </Text>
      </Box>

      <Accordion mt={4} allowToggle>
        {youtubedata.slice(0, 4).map((value, i) => (
          <CustomAccordionItem title={value.title}>
            <VideoCard key={i}>
              <iframe
                src={value.link}
                width={"100%"}
                height={"100%"}
                title={value.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                          gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </VideoCard>
          </CustomAccordionItem>
        ))}
      </Accordion>

      <Box mt={4}>
        <Link href={"https://youtube.com/@WeNtTalk"}>
          <Button colorScheme={"red"}>
            <Icon as={FaYoutube} /> &nbsp; YouTube Channel
          </Button>
        </Link>
      </Box>

      <Box mt={4}>
        <Link href={"/archive"}>
          <Button colorScheme={"orange"}>
            <Icon as={FaArchive} /> &nbsp; Archive
          </Button>
        </Link>
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
        <Text as={"b"} fontSize={"2xl"} color={"#62605D"} fontFamily={"Hind"}>
          Hosts
        </Text>
      </Box>
      <Flex mt={4} flexWrap={"wrap"}>
        <HostCard
          name={"Shivang Gupta"}
          src={"../../personal-images/shivang.jpg"}
          email={"mailto:shivanggupta2110@gmail.com"}
          github={"https://github.com/Shivang211"}
          twitter={"https://twitter.com/drunken_sailor2"}
          website={"https://drunkensailor.site"}
          description={
            "Day-dreamer by day and dreamer by night, Shivang is a driven individual focused on thinking differently. In his free time, he loves to code, play sports, listen to music and flame influencers."
          }
        />
        <Spacer />
        <HostCard
          name={"Sumanth Yalamarty"}
          src={"../../personal-images/sumanth.jpg"}
          email={"mailto:syalamarty002@gmail.com"}
          github={"https://github.com/s7manth"}
          twitter={"https://twitter.com/s7manth"}
          website={"https://s7manth.me"}
          description={"Ideation. Innovation. Transformation."}
        />
      </Flex>

      <Divider mt={6} />
      <Text mt={3} mb={3} fontFamily={"Hind-Regular"}>
        © Copyright 2023. We Need To Talk. All Rights Reserved.
      </Text>
    </Container>
  );
};

export default HomePage;
