import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {
  const [ logged, setLogged ] = useState(false) 
  
  return (
    <div className="background">
      <Header></Header>
      {logged ?
        <p>logged in!</p>
        :
        <Home></Home>
      }
    </div>
  );
}

export default App;
