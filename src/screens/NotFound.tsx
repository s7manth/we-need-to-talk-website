import {
  Button,
  Container,
  Link,
  Text,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaExternalLinkAlt } from "react-icons/fa";

const NotFound = () => {
  return (
    <Container>
      <Box height={"100vh"}>
        <AbsoluteCenter>
          <Text fontWeight={"bold"} color={"#62605D"} fontSize={50}>
            Looks like you are lost!
          </Text>
          <Text fontWeight={"light"} fontSize={20} mb={2}>
            Let's get you back to home.
          </Text>
          <Link href={"/"}>
            <Button colorScheme={"orange"}>
              <Icon as={FaExternalLinkAlt} /> &nbsp; Home
            </Button>
          </Link>
        </AbsoluteCenter>
      </Box>
    </Container>
  );
};

export default NotFound;
