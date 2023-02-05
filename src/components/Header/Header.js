import React from 'react';
import { useState } from 'react';
import './Header.css';
import { Button, ButtonGroup, } from '@chakra-ui/react'
import Register from '../Modals/Register'
import Login from '../Modals/Login'




function Header() {
  const [isResgisterOpen, setIsRegisterOpen] = React.useState(false)
  const [isLoginOpen, setIsLoginOpen] = React.useState(false)


  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);


  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);


  return (
    <div className='header-container'>
      <div className="dummy-header">
        <div className='title-container'>
          <div>Techubator</div>
          <div className='Register'>
            <Button colorScheme='cyan' appearance="ghost" onClick={openRegister}>Register</Button>
          </div>
          <div className='Login'>
            <Button colorScheme='cyan' appearance="ghost" onClick={openLogin}>Login</Button>
          </div>
        </div>
      </div>
      <Register
        isOpen={isResgisterOpen}
        onClose={closeRegister}
      ></Register>
      <Login
        isOpen={isLoginOpen}
        onClose={closeLogin}
      ></Login>
    </div>




  );
}


export default Header;
