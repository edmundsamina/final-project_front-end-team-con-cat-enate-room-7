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

  function InfoModal({title,text}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div className="info-modal">
        <IconButton className="modal-icon" onClick={onOpen} icon={<InfoIcon/>} bgColor={"white"}/>
  
        <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {text}
            </ModalBody>
  
            <ModalFooter>
              <Button bgColor={'roots.100'} color={"white"} mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }

  export default InfoModal