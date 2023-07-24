import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const Overlay = () => (
  <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
);

const CustomBox = ({
  colorScheme,
  title,
  modalContent,
  icon,
}: {
  colorScheme: string;
  title: string;
  modalContent: string;
  icon: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay] = useState(<Overlay />);

  return (
    <Box>
      <Tooltip placement={"top-start"} label={title} fontSize="md">
        <Button
          onClick={onOpen}
          bgRepeat="no-repeat"
          variant={"solid"}
          height="170px"
          width="170px"
          colorScheme={colorScheme}
          borderRadius={20}
          borderWidth={3}
        >
          <Text fontSize={"3xl"}>
            <Icon as={icon} w={12} h={12} />
          </Text>
        </Button>
      </Tooltip>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            <Text fontSize={"3xl"} fontFamily={"Hind"}>
              {title}
            </Text>
          </ModalHeader>
          <ModalBody>
            <Text fontFamily={"Hind-Regular"}>{modalContent}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CustomBox;
