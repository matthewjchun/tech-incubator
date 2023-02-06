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
  Input

} from '@chakra-ui/react'
import { signInWithEmailAndPassword } from "@firebase/auth";
import { UserContext } from "../../contexts/User";


function Login(props) {
  const { isOpen, onClose, auth } = props
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useContext(UserContext)

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