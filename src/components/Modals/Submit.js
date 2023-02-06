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
    FormHelperText,
    Divider,
    Heading,
} from '@chakra-ui/react'
import { doc, getDocs, setDoc, collection } from "firebase/firestore";
import { TaskDataContext } from '../../contexts/TaskData';

function Submit(props) {
    const { isOpen, onClose, db, item } = props

    const initialRef = React.useRef(null)

    const [submission, setSubmission] = useState("")
    const [ taskData, setTaskData ] = useContext(TaskDataContext)

    const handleSubmitTask = async () => {
        var taskData = {
            companyName: item.companyName,
            description: item.description,
            email: item.email,
            estDate: item.estDate,
            name: item.name,
            status: "completed",
            submission: submission
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
                        <Input ref={initialRef} type='url' placeholder='Submission URL' value={submission} onChange={e => setSubmission(e.target.value)} />
                        <FormHelperText>Please submit a video or Google Docs url</FormHelperText>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleSubmitTask}>
                        Submit
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default Submit;
