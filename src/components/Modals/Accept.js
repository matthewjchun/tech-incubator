import React, { useEffect, useState } from 'react';
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



function Accept(props) {
    const { isOpen, onClose } = props
    const item = props.item

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
                    Accept Assignment
                    </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Heading size='md'>Company</Heading>
                    <Divider variant="thick"/>
                    <p>{item.companyName}</p>
                    <Heading size='sm'>Assignment Task</Heading>
                    <Divider />
                    <p>{item.name}</p>
                    <Heading size='sm'>Description</Heading>
                    <Divider />
                    <p>{item.description}</p>

                    <FormControl mt={4}>
                        <FormLabel>Estimated Completion Date</FormLabel>
                        <Input ref={initialRef} placeholder='Completion Date'  type="datetime-local"/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Accept
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default Accept;
