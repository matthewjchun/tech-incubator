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



function Accept(props) {
    const { isOpen, onClose, db } = props
    const item = props.item

    const [user, setUser] = useState("matthewchun.18@gmail.com")
    const [estDate, setEstDate] = useState("")
    const [ taskData, setTaskData ] = useContext(TaskDataContext)

    const initialRef = React.useRef(null)

    const handleAcceptTask = async () => {
        var taskData = {
            companyName: item.companyName,
            description: item.description,
            email: user,
            estDate: estDate,
            name: item.name,
            status: item.status,
            submission: item.submission
        }

        await setDoc(doc(db, "tasks", item.id), taskData)
        fetchData()
        onClose()
    }

    const fetchData = async () => {
        const snapshot = await getDocs(collection(db, 'tasks'));
        const fetchedData = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
        });
        setTaskData(fetchedData)
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
                        <Input ref={initialRef} placeholder='Completion Date'  type="datetime-local" value={estDate} onChange={e => setEstDate(e.target.value)}/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleAcceptTask}>
                        Accept
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default Accept;
