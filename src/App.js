import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Create from './components/Modals/Create'
import Submit from './components/Modals/Submit'
import Register from './components/Modals/Register'
import Login from './components/Modals/Login'
function App() {
  const [ logged, setLogged ] = useState(false) 
  
  return (
    <div className="background">
      <Header></Header>
      <Create></Create>
      <Submit></Submit>
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {logged ?
        <p>logged in!</p>
        :
        <Home></Home>
      }
    </div>
  );
}

export default App;
