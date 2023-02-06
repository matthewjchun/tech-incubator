import React, { useContext } from 'react';
import { useState } from 'react';
import './Header.css';
import { Button, ButtonGroup, } from '@chakra-ui/react'
import Register from '../Modals/Register'
import Login from '../Modals/Login'
import { UserContext } from '../../contexts/User';
import { signOut } from "firebase/auth";

function Header(props) {
  const { auth, db } = props

  const [user, setUser] = useContext(UserContext)

  const [isResgisterOpen, setIsRegisterOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)


  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);


  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);


  const signUserOut = () => {
    signOut(auth).then(() => {
      setUser(null)
      console.log("sign out successful")
    }).catch((error) => {
      console.log("error: ", error)
    })
  }

  return (
    <div className='header-container'>
      <div className="dummy-header">
        <div className='title-container'>
          <div>Techubator</div>
          <div className='Register'>
            {user ?
              <Button colorScheme='cyan' appearance="ghost" onClick={signUserOut}>Sign Out</Button>
              :
              <Button colorScheme='cyan' appearance="ghost" onClick={openRegister}>Register</Button>
            }
          </div>
          <div className='Login'>
            {user ?
              null
              :
              <Button colorScheme='cyan' appearance="ghost" onClick={openLogin}>Login</Button>
            }
          </div>
        </div>
      </div>
      <Register
        isOpen={isResgisterOpen}
        onClose={closeRegister}
        auth={auth}
      ></Register>
      <Login
        isOpen={isLoginOpen}
        onClose={closeLogin}
        auth={auth}
      ></Login>
    </div>
  );
}


export default Header;
