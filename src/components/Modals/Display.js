import React, { useContext, useState } from 'react';
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
import { doc, getDocs, setDoc, collection } from "firebase/firestore";
import { TaskDataContext } from '../../contexts/TaskData';
import { UserContext } from '../../contexts/User';



function Display(props) {
    const { isOpen, onClose, item } = props

    const initialRef = React.useRef(null)

    if (item.email == ""){
        var email = "None"
        var estDate = "None"
    }
    else {
        var email = item.email
        var estDate = item.estDate
    }

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
                    Task Details
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
                    <Heading size='sm'>User Handling</Heading>
                    <Divider />
                    <p>{email}</p>
                    <Heading size='sm'>Estimated Date of Completion</Heading>
                    <Divider />
                    <p>{estDate}</p>
                    <Heading size='sm'>Status</Heading>
                    <Divider />
                    <p>{item.status}</p>
                    <Heading size='sm'>Submission</Heading>
                    <Divider />
                    { item.submission != "" ?
                        <a href={item.submission}>{item.submission}</a>
                        :
                        <p>None</p>                    
                    }

                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default Display;
