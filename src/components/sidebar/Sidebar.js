import './Sidebar.css';
import React from 'react'
import logo from "../../assets/logo_no_text_green.png"

const Sidebar = ({sidebarOpen , closeSidebar}) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
        <div className='sidebar__title'>
            <div className='sidebar__img'>
                <img width="30" src={logo} alt="logo"/>
                <h1>tinyfarms</h1>
                <h1>tinyfarms</h1>
                <h1>tinyfarms</h1>
                <h1>tinyfarms</h1>
                <h1>tinyfarms</h1>
                
            </div>
        </div>
        Sidebar
    </div>
  )
}

export default Sidebar