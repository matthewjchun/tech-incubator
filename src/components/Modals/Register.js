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
import { CompanyContext } from '../../contexts/Company'

function Register(props) {
  const { isOpen, onClose, auth } = props
  const [accType, setAccType] = useState('1')
  const [name, setName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companyURL, setCompanyURL] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ user, setUser ] = useContext(UserContext)
  const [ company, setCompany ] = useContext(CompanyContext)

  const initialRef = React.useRef(null)

  const registerAcc = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    setUser(auth.currentUser)
    onClose()
  }

  const registerCompanyAcc = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    setUser(auth.currentUser)
    setCompany(companyName)
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
                <FormControl>
                  <FormLabel>Full name</FormLabel>
                  <Input ref={initialRef} placeholder='Full name' value={name} onChange={e => setName(e.target.value)}  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                </FormControl>
              </>
              :
              <>
                <FormControl>
                  <FormLabel>Company name</FormLabel>
                  <Input ref={initialRef} placeholder='Company name' value={companyName} onChange={e => setCompanyName(e.target.value)}  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Logo</FormLabel>
                  <Input placeholder='Logo url' value={companyURL} onChange={e => setCompanyURL(e.target.value)}/>
                </FormControl>
              </>
            }
          </ModalBody>

          <ModalFooter>
            {accType == "1" ?
              <Button colorScheme='blue' mr={3} onClick={registerAcc}>
                Register
              </Button>
              :
              <Button colorScheme='blue' mr={3} onClick={registerCompanyAcc}>
                Register
              </Button>
            }

            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Register;