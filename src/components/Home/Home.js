import './Home.css';
import Create from '../Modals/Create'
import Accept from '../Modals/Accept'
import Submit from '../Modals/Submit'
import Display from '../Modals/Display'
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
import { CompanyContext } from '../../contexts/Company';

function Home(props) {
    // Creating modal state values
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isSubmitOpen, setIsSubmitOpen] = useState(false)
    const [isAcceptOpen, setIsAcceptOpen] = useState(false)
    const [isDisplayOpen, setIsDisplayOpen] = useState(false)

    // setting the necessary contexts
    const [user, setUser] = useContext(UserContext)
    const [company, setCompany] = useContext(CompanyContext)

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

    const openDisplay = (item) => {
        setTask(item)
        setIsDisplayOpen(true);
    };
    const closeDisplay = () => setIsDisplayOpen(false);


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
            {company ?
                <Button className='home-upload' colorScheme='blue' onClick={openCreate}>Upload New Task</Button>
                :
                <Button className='home-upload' colorScheme='blue' onClick={openCreate} isDisabled >Upload New Task</Button>
            }
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
                        {company ?
                            taskData.filter((item) => {
                                if (item.companyName == company) {
                                    return item
                                }
                            }).map(item => (
                                <Tr>
                                    <Td style={{ width: "5%" }}>{item.companyName}</Td>
                                    <Td style={{ width: "10%" }}>{item.name}</Td>
                                    <Td style={{ width: "70%", overflowX: "auto" }}>{item.description}</Td>
                                    <Td key={item} style={{ width: "15%" }}>
                                        <Button colorScheme='green' onClick={() => openDisplay(item)}>Details</Button>
                                    </Td>
                                </Tr>
                            ))
                            :
                            taskData.filter((item) => {
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
                        {company ?
                            null
                            :
                            taskData.filter((item) => {
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
            <Display
                isOpen={isDisplayOpen}
                onClose={closeDisplay}
                item={task}
            ></Display>
        </div>
    );
}

export default Home;
