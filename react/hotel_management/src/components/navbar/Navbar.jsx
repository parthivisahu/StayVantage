import React from 'react'
import "./navbar.css";
import {Link} from "react-router-dom"
import logo from "../../imgs/hotel.logo.png"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className="navContainer">
          <Link to ="/">
            <span className="logo">
                <img className = "logo" src={logo} alt='' />
            </span>
            </Link>
            <div className='user'>
            {
            user ? "Welcome " + user.username +" !" : 
            (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar