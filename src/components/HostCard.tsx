import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Text,
    Stack
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaLink, FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";

const HostCard = ({
    name,
    description
}: {
    name: string,
    description: string
}) => {
    return (
        <Card
            maxW={'280px'}
            variant={'outline'}
            bg={'#f4f0e8'}
            borderColor={"#f4f0e8"}
        >
            <CardBody>
                <Avatar size='2xl' />
                <Stack mt='4' spacing='1'>
                    <Text as='b' fontSize='2xl'>
                        {name}
                    </Text>
                    <Text>
                        {description}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter justify={'center'}>
                <Box display='flex' flexWrap={'wrap'}>
                    <Button variant='ghost' colorScheme='facebook'>
                        <Icon as={FaLink} />
                    </Button>
                    <Button variant='ghost' colorScheme='teal'>
                        <Icon as={FaEnvelope} />
                    </Button>
                    <Button variant='ghost' colorScheme='twitter'>
                        <Icon as={FaTwitter} />
                    </Button>
                    <Button variant='ghost' colorScheme='gray'>
                        <Icon as={FaGithub} />
                    </Button>
                </Box>
            </CardFooter>
        </Card>
    )
};

export default HostCard;