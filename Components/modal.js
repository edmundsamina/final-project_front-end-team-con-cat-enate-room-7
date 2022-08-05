import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

  import { InfoIcon } from '@chakra-ui/icons';
  import { IconButton } from "@chakra-ui/react";

  function InfoModal({text}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div className="info-modal">
        <IconButton onClick={onOpen} icon={<InfoIcon color="roots.100"/>} bgColor={"white"}/>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {text}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }

  export default InfoModal