import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Create from './components/Modals/Create'
import Submit from './components/Modals/Submit'

function App() {
  const [ logged, setLogged ] = useState(false) 
  
  return (
    <div className="background">
      <Header></Header>
      <Create></Create>
      <Submit></Submit>
      {logged ?
        <p>logged in!</p>
        :
        <Home></Home>
      }
    </div>
  );
}

export default App;
