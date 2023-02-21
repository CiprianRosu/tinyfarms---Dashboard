import React from 'react'
import './Navbar.css'
import avatar from "../../assets/logo_no_text_green.png"

const Navbar = ({sidebarOpen , openSidebar}) => {
  return (
    <div className='navbar'>
        <div className="nav_icon" onClick={() =>openSidebar()}>
            <i className='fa fa-bars'></i>
        </div>
        <div className='navbar__left'>

       
        <a href="#">
                <img width="30" src={avatar} alt="avatar"/>
            </a>
            <a href="#">Subscriber</a>
            <a href="#">Video Management </a>
            <a className='active_link'>Admin</a>
            
        </div>
        <div className='navbar__right'>
       
           
        </div>
    </div>
  )
}

export default Navbar