import React from 'react'
import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">
            Get the latest deals and offers straight to your inbox every day!
        </span>
        <div className="mailInputContainer">
            <input type='text' placeholder='Your Email' />
            <button className='headerBtn'>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList