import React from 'react'
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
  Center,
} from '@chakra-ui/react'

function Register(props) {
  const { isOpen, onClose } = props
  const [accType, setAccType] = React.useState('1')

  const initialRef = React.useRef(null)


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
                  <FormLabel>First name</FormLabel>
                  <Input ref={initialRef} placeholder='First name' />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder='Last name' />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Student ID</FormLabel>
                  <Input placeholder='Student ID' />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder='Password' />
                </FormControl>
              </>
              :
              <>
                <FormControl>
                  <FormLabel>Company name</FormLabel>
                  <Input ref={initialRef} placeholder='Company name' />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder='Password' />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Logo</FormLabel>
                  <Input placeholder='Logo url' />
                </FormControl>
              </>
            }
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Register;