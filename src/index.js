import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { TaskDataProvider } from './contexts/TaskData';
import { UserProvider } from './contexts/User';
import { CompanyProvider } from './contexts/Company';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <UserProvider>
      <CompanyProvider>
        <TaskDataProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </TaskDataProvider>
      </CompanyProvider>
    </UserProvider>
  </ChakraProvider>
);

