import './Home.css';
import Create from '../Modals/Create'
import Accept from '../Modals/Accept'
import Submit from '../Modals/Submit'
import {
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { TaskDataContext } from '../../contexts/TaskData';
import { UserContext } from '../../contexts/User';

function Home(props) {
    // Creating modal state values
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isSubmitOpen, setIsSubmitOpen] = useState(false)
    const [isAcceptOpen, setIsAcceptOpen] = useState(false)

    const [user, setUser] = useContext(UserContext)

    // Initializing database and data states
    const db = props.db
    const [taskData, setTaskData] = useContext(TaskDataContext)
    const [task, setTask] = useState({
        id: "",
        companyName: "",
        description: "",
        email: "",
        estDate: "",
        name: "",
        status: "",
        submission: ""
    })

    const openCreate = () => setIsCreateOpen(true);
    const closeCreate = () => setIsCreateOpen(false);

    const openSubmit = (item) => {
        setTask(item)
        setIsSubmitOpen(true);
    };
    const closeSubmit = () => setIsSubmitOpen(false);

    const openAccept = (item) => {
        setTask(item)
        setIsAcceptOpen(true);
    };
    const closeAccept = () => setIsAcceptOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(collection(db, 'tasks'));
            const fetchedData = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() };
            });
            setTaskData(fetchedData)
        }
        fetchData();
    }, []);


    return (
        <div className="home-layout">
            <Button className='home-upload' colorScheme='blue' onClick={openCreate}>Upload New Task</Button>
            <TableContainer className="home-table">
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Company</Th>
                            <Th>Task Name</Th>
                            <Th>Description</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {taskData.filter((item) => {
                            if (item.status != "completed" && item.email == user.email) {
                                return item
                            }
                        }).map(item => (
                            <Tr>
                                <Td style={{ width: "5%" }}>{item.companyName}</Td>
                                <Td style={{ width: "10%" }}>{item.name}</Td>
                                <Td style={{ width: "70%", overflowX: "auto" }}>{item.description}</Td>
                                <Td key={item} style={{ width: "15%" }}>
                                    <Button colorScheme='green' onClick={() => openSubmit(item)}>Submit</Button>
                                </Td>
                            </Tr>
                        ))}
                        {taskData.filter((item) => {
                            if (item.status != "completed" && item.email == "") {
                                return item
                            }
                        }).map(item => (
                            <Tr>
                                <Td style={{ width: "5%" }}>{item.companyName}</Td>
                                <Td style={{ width: "10%" }}>{item.name}</Td>
                                <Td style={{ width: "70%", overflowX: "auto" }}>{item.description}</Td>
                                <Td key={item} style={{ width: "15%" }}>
                                    <Button colorScheme='blue' onClick={() => openAccept(item)}>Accept</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Create
                isOpen={isCreateOpen}
                onClose={closeCreate}
                db={db}
            ></Create>
            <Accept
                isOpen={isAcceptOpen}
                onClose={closeAccept}
                item={task}
                db={db}
            ></Accept>
            <Submit
                isOpen={isSubmitOpen}
                onClose={closeSubmit}
                item={task}
                db={db}
            ></Submit>
        </div>
    );
}

export default Home;
