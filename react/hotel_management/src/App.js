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
import BookingWidget from './BookingWidget/BookingWidget';
import PlacePage from './placepage';
import LoginPage from './LogIn/LogIn';
import RegisterPage from './RegisterPage';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/login' element = {<LoginPage />}/>
      <Route path='/register' element = {<RegisterPage />}/>
      <Route path='/hotels' element = {<List />}/>
      <Route path='/hotels/:id' element = {<Hotel />}/>
      <Route path='/hotels/bookings/:id' element = {<BookingWidget />}/>
      <Route path="/hotels/place/:id" element={<PlacePage/>} />
    </Routes>
   </BrowserRouter>
   
  )
  
}


export default App