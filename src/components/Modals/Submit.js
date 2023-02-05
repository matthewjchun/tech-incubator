import React from 'react';
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
    FormHelperText,
    Divider,
    Heading,
} from '@chakra-ui/react'



function Submit(props) {
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
                    Submit your Assignment
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
                        <FormLabel>Submission</FormLabel>
                        <Input ref={initialRef} type='url' placeholder='Submission URL' />
                        <FormHelperText>Please submit a video or Google Docs url</FormHelperText>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Submit
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default Submit;
