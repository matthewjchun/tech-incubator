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
    Heading,
    Textarea,
} from '@chakra-ui/react'
import { doc, getDocs, addDoc, collection } from "firebase/firestore";
import { TaskDataContext } from '../../contexts/TaskData';


function Create(props) {
    // initialize props
    const { isOpen, onClose, db } = props
    // Use context in order to force table to rerender upon writing to database
    const [ taskData, setTaskData ] = useContext(TaskDataContext)

    // create state variables for the task information
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")

    const handleAddTask = async () => {
        var taskData = {
            companyName: "Google",
            description: desc,
            email: "",
            estDate: "",
            name: name,
            status: "incomplete",
            submission: "",
        }

        const newDoc = await addDoc(collection(db, "tasks"), taskData);
        console.log("Document written with ID: ", newDoc.id);
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
                        <Input ref={initialRef} placeholder='Task name' value={name} onChange={e => setName(e.target.value)} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea placeholder='Please write a short description of your task.' value={desc} onChange={e => setDesc(e.target.value)} />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleAddTask}>
                        Upload
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default Create;
