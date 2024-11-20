import logo from './logo.svg';
import './App.css';
// import Resgister from './Components/Resgister';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './Components/Navbar';
import Users from './pages/Users';


function App() {
  return (
    <div className="App">

      <Navbar/>

     <Routes>

       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Register' element={<Register/>}/>
       <Route path='/Users' element={<Users/>}/>

     </Routes>



         {/* <Resgister/> */}
    </div>
  );
}

export default App;
