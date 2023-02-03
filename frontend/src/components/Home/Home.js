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
import React from 'react';


function Home() {
    const [isCreateOpen, setIsCreateOpen] = React.useState(false)
    const [isSubmitOpen, setIsSubmitOpen] = React.useState(false)
    const [isAcceptOpen, setIsAcceptOpen] = React.useState(false)

    const openCreate = () => setIsCreateOpen(true);
    const closeCreate = () => setIsCreateOpen(false);

    const openSubmit = () => setIsSubmitOpen(true);
    const closeSubmit = () => setIsSubmitOpen(false);

    const openAccept = () => setIsAcceptOpen(true);
    const closeAccept = () => setIsAcceptOpen(false);

    // fetch the collection data for all of the tasks here, similar to parsume
    // change the text on the button depending on the value of the status parameter: 
    // { task.status ? <Button>Accept</> : <Button>Submit</>}
    // ^ Probs gonna run into more difficulties later on with this

    // Try to figure out a better way to deal with overflow in the description cell

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
                        <Tr>
                            <Td>Headstarter</Td>
                            <Td style={{ maxWidth: "25px" }}>Project #2</Td>
                            <Td>Create a tech incubator webpage</Td>
                            <Td>
                                <Button colorScheme='blue' onClick={openAccept}>Accept</Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Google</Td>
                            <Td style={{ maxWidth: "25px" }}>Hire Matthew Chun</Td>
                            <Td style={{ maxWidth: "100px", overflowX: "auto" }}>
                                Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
                            </Td>
                            <Td>
                                <Button colorScheme='blue' onClick={openSubmit}>Submit</Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Twitter</Td>
                            <Td style={{ maxWidth: "25px" }}>Fire Elon</Td>
                            <Td>Please help us hire a new CEO for our company</Td>
                            <Td>
                                <Button colorScheme='blue'>Accept</Button>
                            </Td>
                        </Tr>
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
            ></Accept>
            <Submit
                isOpen={isSubmitOpen}
                onClose={closeSubmit}
            ></Submit>
        </div>
    );
}

export default Home;
