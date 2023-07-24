import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaExternalLinkAlt, FaHome, FaYoutube } from "react-icons/fa";
import youtubedata from "../data/youtubedata";

const ArchivePage = () => {
  return (
    <>
      <Flex mt={6} minWidth={"max-content"} alignItems={"center"} gap={10}>
        <Link href={"/"}>
          <Button colorScheme={"orange"}>
            <Icon as={FaHome} /> &nbsp; Home
          </Button>
        </Link>
        <Spacer />
        <Link href={"https://youtube.com/@WeNtTalk"}>
          <Button colorScheme={"red"}>
            <Icon as={FaYoutube} /> &nbsp; YouTube Channel
          </Button>
        </Link>
      </Flex>

      <Divider mt={6} />

      <Container mt={4} maxW={"xl"}>
        <Flex gap={3} flexDirection={"column"}>
          {youtubedata.map((obj, i) => (
            <Card key={i} pl={5} pr={5} size={"md"} variant={"elevated"}>
              <Box textAlign={"left"} mt={3}>
                <Text as={"b"} fontSize={20}>
                  {obj.title}
                </Text>
              </Box>
              <Box textAlign={"left"} mt={2}>
                {obj.description}
              </Box>
              <Flex justifyContent={"flex-begin"} mb={4} mt={3}>
                <Link colorScheme="black" href={obj.link}>
                  <Icon as={FaExternalLinkAlt} /> Video
                </Link>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default ArchivePage;
