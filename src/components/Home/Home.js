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
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'

function Home(props) {
    // Creating modal state values
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isSubmitOpen, setIsSubmitOpen] = useState(false)
    const [isAcceptOpen, setIsAcceptOpen] = useState(false)
    // Initializing database
    const db = props.db
    const [data, setData] = useState([])
    const [task, setTask] = useState({
        companyName: "dummy",
        description: "",
        name: "",
        studentId: "",
    })

    const openCreate = () => setIsCreateOpen(true);
    const closeCreate = () => setIsCreateOpen(false);

    const openSubmit = (item) => {
        setIsSubmitOpen(true);
        setTask(item)
    };
    const closeSubmit = () => setIsSubmitOpen(false);

    const openAccept = (item) => {
        setIsAcceptOpen(true);
        setTask(item)
    };
    const closeAccept = () => setIsAcceptOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(collection(db, 'tasks'));
            const fetchedData = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() };
            });
            setData(fetchedData)
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
                        {data.map(item => (
                            <Tr>
                                <Td style={{ width: "5%" }}>{item.companyName}</Td>
                                <Td style={{ width: "10%" }}>{item.name}</Td>
                                <Td style={{ width: "70%", overflowX: "auto" }}>{item.description}</Td>
                                <Td key={item} style={{ width: "15%" }}>
                                    {item.studentId ?
                                        <Button colorScheme='blue' onClick={() => openSubmit(item)}>Submit</Button>
                                        :
                                        <Button colorScheme='blue' onClick={() => openAccept(item)}>Accept</Button>
                                    }
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Create
                isOpen={isCreateOpen}
                onClose={closeCreate}
            ></Create>
            <Accept
                isOpen={isAcceptOpen}
                onClose={closeAccept}
                item={task}
            ></Accept>
            <Submit
                isOpen={isSubmitOpen}
                onClose={closeSubmit}
                item={task}
            ></Submit>
        </div>
    );
}

export default Home;
