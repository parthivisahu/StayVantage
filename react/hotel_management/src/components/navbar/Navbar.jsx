import React from 'react'
import "./navbar.css";
import {Link} from "react-router-dom"
import logo from "../../imgs/hotel.logo.png"
import LoginPage from '../../LogIn/LogIn';
// import LoginPage from '../../LogIn/LogIn';
// import {
//   Route,
//   Routes
// } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
          <Link to ="/">
            <span className="logo">
                <img className = "logo" src={logo} alt='' />
            </span>
            </Link>
            <div className="navItem">
                <button className="navButton">Sign up</button>
                <Link to="/login">
                <button className="navButton">Log in</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar