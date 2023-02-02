import { useState } from 'react';
import './App.css';

function App() {
  const [ logged, setLogged ] = useState(false) 
  
  return (
    <div className="App">
      {logged ?
        <p>logged in!</p>
        :
        <p>ruh roh</p>
      }

    </div>
  );
}

export default App;
