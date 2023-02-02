import './Home.css';
import Create from '../Modals/Create'
import {
    Button,
    ButtonGroup,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useDisclosure,
} from '@chakra-ui/react'


function Home() {
    const { createIsOpen, createOnOpen, createOnClose } = useDisclosure();

    // fetch the collection data for all of the tasks here, similar to parsume
    // change the text on the button depending on the value of the status parameter: 
    // { task.status ? <Button>Accept</> : <Button>Submit</>}
    // ^ Probs gonna run into more difficulties later on with this

    // Try to figure out a better way to deal with overflow in the description cell
    return (
        <div className="home-layout">
            <Create
                isOpen={createIsOpen}
                onOpen={createOnOpen}
                onClose={createOnClose}
            ></Create>
            <Button className='home-upload' colorScheme='blue'>Upload New Assignment</Button>
            <TableContainer className="home-table">
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Company</Th>
                            <Th>Assignment Name</Th>
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
                                <Button colorScheme='blue' onClick={createOnOpen}>Accept</Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Google</Td>
                            <Td style={{ maxWidth: "25px" }}>Hire Matthew Chun</Td>
                            <Td style={{ maxWidth: "100px", overflowX: "auto" }}>
                                Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.

                                Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                            </Td>
                            <Td>
                                <Button colorScheme='blue'>Accept</Button>
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
        </div>
    );
}

export default Home;
