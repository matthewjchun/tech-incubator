import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { TaskDataProvider } from './contexts/TaskData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <TaskDataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TaskDataProvider>
  </ChakraProvider>
);

