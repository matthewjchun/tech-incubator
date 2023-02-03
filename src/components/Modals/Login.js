import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Button,
    FormLabel,
    Input

  } from '@chakra-ui/react'

  function Login(props) {
    const { isOpen, onOpen, onClose } = props
  
    const initialRef = React.useRef(null)
    
  
    return (
      <>
        
  
        <Modal
          initialFocusRef={initialRef}
          isOpen={true}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

            <FormControl mt={4}>
              <FormLabel>Student ID</FormLabel>
              <Input placeholder='Student ID' />
            </FormControl>
          
           <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password' />
            </FormControl>
          
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Login;