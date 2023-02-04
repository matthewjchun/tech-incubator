import React from 'react';
import { useState } from 'react';
import './Header.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import Register from '../Modals/Register'
import Login from '../Modals/Login'

function Header() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <div className='header-container'>
      <div className="dummy-header">
        <div className='title-container'>
          <div>Techubator</div>
          <div className='header-register'>
            <Button colorScheme='blue' onClick={openRegister}>Register</Button>
          </div>
          <div className='header-login'>
            <Button colorScheme='blue' onClick={openLogin}>Login</Button>
          </div>
        </div>
      </div>
      <Register
        isOpen={isRegisterOpen}
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
