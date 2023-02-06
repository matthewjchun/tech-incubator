import React, { useContext, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { UserContext } from '../../contexts/User'

function Register(props) {
  const { isOpen, onClose, auth } = props
  const [accType, setAccType] = useState('1')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ user, setUser ] = useContext(UserContext)

  const initialRef = React.useRef(null)
  
  const registerAcc = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    setUser(auth.currentUser)
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
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <RadioGroup onChange={setAccType} value={accType}>
              <Stack direction='row'>
                <Radio value='1'>Student</Radio>
                <Radio value='2'>Company</Radio>
              </Stack>
            </RadioGroup>
            {accType == '1' ?
              <>
                {/* <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input ref={initialRef} placeholder='First name' />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder='Last name' />
                </FormControl> */}

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                </FormControl>
              </>
              :
              <>
                <FormControl>
                  <FormLabel>Company name</FormLabel>
                  <Input ref={initialRef} placeholder='Company name' />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder='Password' />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Logo</FormLabel>
                  <Input placeholder='Logo url' />
                </FormControl>
              </>
            }
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={registerAcc}>
              Register
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Register;