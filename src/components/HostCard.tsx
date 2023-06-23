import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack, Image, Center
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaLink, FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";

const HostCard = ({
  name,
  description,
    src,
}: {
  name: string;
  description: string;
  src: string;

}) => {
  return (
    <Card
      maxW={"100%"}
      variant={"outline"}
      bg={"#f4f0e8"}
      borderColor={"#f4f0e8"}
    >
      <CardBody>
        <Center>
          <Image src={src} fallbackSrc='https://via.placeholder.com/150' borderRadius='full'
                 boxSize='150px'/>
        </Center>
        <Stack mt="4" spacing="1">
          <Text as="b" fontSize="2xl" fontFamily={"Hind"}>
            {name}
          </Text>
          <Text fontFamily={"Hind-Regular"}>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter justify={"center"}>
        <Box display="flex" flexWrap={"wrap"}>
          <Button variant="ghost" colorScheme="facebook">
            <Icon as={FaLink} />
          </Button>
          <Button variant="ghost" colorScheme="teal">
            <Icon as={FaEnvelope} />
          </Button>
          <Button variant="ghost" colorScheme="twitter">
            <Icon as={FaTwitter} />
          </Button>
          <Button variant="ghost" colorScheme="gray">
            <Icon as={FaGithub} />
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default HostCard;
