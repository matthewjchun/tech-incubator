import { useState } from 'react';
import './Header.css';
import { Button, ButtonGroup } from '@chakra-ui/react'


function Header() {

  return (
    <div className='header-container'>
      <div className="dummy-header">
        <div className='title-container'>
          <div>Techubator</div>
          <div className='Register'>
            <Button colorScheme='blue'>Register</Button>
          </div>
          <div className='Login'>
            <Button colorScheme='blue'>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
