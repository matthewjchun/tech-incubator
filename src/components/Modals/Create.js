import React from 'react';
import './Create.css';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel,
    Heading,
    Textarea,
} from '@chakra-ui/react'



function Create(props) {
    const { isOpen, onClose } = props

    const initialRef = React.useRef(null)

    return (
        <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>
                    <Heading size='lg'>
                    Upload A New Task
                    </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Task name</FormLabel>
                        <Input ref={initialRef} placeholder='Task name' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea placeholder='Please write a short description of your task.'/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Upload
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default Create;
