import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Img,
  Center,
  Link,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaLink, FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";

const HostCard = ({
  name,
  description,
  src,
  website,
  email,
  github,
  twitter,
}: {
  name: string;
  description: string;
  src: string;
  website: string;
  email: string;
  github: string;
  twitter: string;
}) => {
  return (
    <Card
      width={"100%"}
      variant={"outline"}
      bg={"#f4f0e8"}
      borderColor={"#f4f0e8"}
    >
      <CardBody>
        <Center>
          <Img src={src} borderRadius="full" boxSize="150px" />
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
          {website && (
            <Link target={"_blank"} href={website}>
              <Button variant="ghost" colorScheme="facebook">
                <Icon as={FaLink} />
              </Button>
            </Link>
          )}
          {email && (
            <Link target={"_blank"} href={email}>
              <Button variant="ghost" colorScheme="teal">
                <Icon as={FaEnvelope} />
              </Button>
            </Link>
          )}
          {twitter && (
            <Link target={"_blank"} href={twitter}>
              <Button variant="ghost" colorScheme="twitter">
                <Icon as={FaTwitter} />
              </Button>
            </Link>
          )}
          {github && (
            <Link target={"_blank"} href={github}>
              <Button variant="ghost" colorScheme="gray">
                <Icon as={FaGithub} />
              </Button>
            </Link>
          )}
        </Box>
      </CardFooter>
    </Card>
  );
};

export default HostCard;
