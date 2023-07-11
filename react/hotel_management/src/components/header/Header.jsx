import React, { useState } from 'react'
import "./header.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBed, faCalendarDays, faHouseChimneyWindow,  faHouseUser,  faMonument,  faPerson} from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'
import {format} from "date-fns"
// import Taj from "../../imgs/TajMahal.jpg"

const Header = (type) => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1,
  })

  const handleOption = (name,operation) => {
    setOptions ((prev) => {
      return{
        ...prev, 
        [name]: operation === "i" ? options[name] +1 : options[name]-1,
    }})
  }
  return (
    <div className='header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon= {faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faHouseChimneyWindow} />
            <span>Villas</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faHouseUser} />
            <span>Cabins</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faMonument} />
            <span>Attractions</span>
            {/* <button className='headerBtn'>Sign In / Register </button> */}
            </div>
        </div>
        {type !== "list" && (
          <>
          <h1 className="headerTitle">Your Dream Stay, Within Reach: <br />Incredible Hotel Discounts</h1>
        <p className="headerDesc">
        Discover a world of hotels at your fingertips. Book with confidence and embark on unforgettable journeys. 
        </p>
        
        
        <div className="headerSearch">
        <div className="headerSearchItem">
             <FontAwesomeIcon icon={faBed} className='headerIcon' />
             <input type='text' 
             placeholder='Where are you going?' 
             className='headerSearchInput' />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy" )}`}</span>
            {openDate && 
            <DateRange 
            editableDateInputs={true} 
            onChange={item => setDate([item.selection])} 
            moveRangeOnFirstSelection={false} 
            ranges={date} 
            className='date' />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span onClick={()=>setOpenOptions(!openOptions)}className='headerSearchText'>{`${options.adult} adult - ${options.children} children - ${options.room} room`} </span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adults</span>
                <div className="optionCounter">
                <button  
                disabled = {options.adult <=1}
                className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button >
                <span className="optionCounterNumber">{options.adult}</span>
                <button  className="optionCounterButton"  onClick={() => handleOption("adult", "i")}>+</button >
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                <button 
                disabled = {options.children <=0}
                className="optionCounterButton"  onClick={() => handleOption("children", "d")}>-</button >
                <span className="optionCounterNumber">{options.children}</span>
                <button  className="optionCounterButton"  onClick={() => handleOption("children", "i")}>+</button >
              </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button
                disabled = {options.room <=1}
                className="optionCounterButton"  onClick={() => handleOption("room", "d")}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button  className="optionCounterButton"  onClick={() => handleOption("room", "i")}>+</button >
              </div>
              </div>
            </div>}
          </div>
        
          <div className="headerSearchItem">
            <button className='headerBtn'>Search</button>
          </div> 
        </div>
        {/* <div className='headerImage'>
            <img src={Taj} alt='' />
          </div> */}
          </>
          )}
        </div>
        
    </div>
  )
}

export default Header;