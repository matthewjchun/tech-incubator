import React from 'react';
import './Submit.css';
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
    Divider,
    Heading,
} from '@chakra-ui/react'



function Submit(props) {
    const { isOpen, onOpen, onClose } = props

    const initialRef = React.useRef(null)

    return (
        <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Submit your Assignment</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Heading size ='md'>Company</Heading>
                    <Divider />
                    <p>Headstarter</p>

                    <FormControl mt={4}>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' />
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
    );
}

export default Submit;
