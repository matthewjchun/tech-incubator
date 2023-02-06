import React, { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Button,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react'
import { signInWithEmailAndPassword } from "@firebase/auth";
import { UserContext } from "../../contexts/User";
import { CompanyContext } from "../../contexts/Company";


function Login(props) {
  const { isOpen, onClose, auth } = props
  const [accType, setAccType] = useState('1')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useContext(UserContext)
  const [company, setCompany] = useContext(CompanyContext)

  const initialRef = React.useRef(null)

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    onClose()
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <RadioGroup onChange={setAccType} value={accType}>
              <Stack direction='row'>
                <Radio value='1'>Student</Radio>
                <Radio value='2'>Company</Radio>
              </Stack>
            </RadioGroup>
            {accType == "2" ?
              <FormControl mt={4}>
                <FormLabel>Company</FormLabel>
                <Input placeholder='Company' value={company} onChange={e => setCompany(e.target.value)} />
              </FormControl>
              :
              null
            }
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={signIn}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Login;