import { Button, Container, Link, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaExternalLinkAlt } from "react-icons/fa";

const ArchivePage = () => {
  return (
    <Container>
      <Text>This is the archive page.</Text>
      <Link href={"/"}>
        <Button colorScheme={"orange"}>
          <Icon as={FaExternalLinkAlt} /> &nbsp; Home
        </Button>
      </Link>
    </Container>
  );
};

export default ArchivePage;
