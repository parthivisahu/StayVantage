import React from 'react';
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import RegisterPage from './RegisterPage';
import Login from './pages/login/LogIn';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/login' element = {<Login />}/>
      <Route path='/register' element = {<RegisterPage />}/>
      <Route path='/hotels' element = {<List />}/>
      <Route path='/hotels/:id' element = {<Hotel />}/>
   
    </Routes>
   </BrowserRouter>
   
  )
  
}


export default App