import "./Sidebar.css";
import logo from "../../assets/logo_no_text_green.png";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Controls from "../../pages/controls/Controls"
import Courses from "../../pages/courses/Courses";
import Programming from "../../pages/programming/Programming";
import Chart from "../../pages/chart/Chart";
import Settings from "../../pages/settings/Settings";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {



  return (
    <BrowserRouter>
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
         
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
        <NavLink to="/"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390.91 380.76"><title>programming</title><path d="M457.57,2841.65a29.15,29.15,0,0,0-41.2,0l-77.67,77.67a29.13,29.13,0,0,0,0,41.19l77.67,77.67a29.13,29.13,0,1,0,41.2-41.19l-57.07-57.07,57.07-57.07A29.15,29.15,0,0,0,457.57,2841.65Z" transform="translate(-330.17 -2749.54)"/><path d="M712.55,2919.32l-77.67-77.67a29.13,29.13,0,0,0-41.2,41.2l57.07,57.07L593.68,2997a29.13,29.13,0,1,0,41.2,41.19l77.67-77.67A29.13,29.13,0,0,0,712.55,2919.32Z" transform="translate(-330.17 -2749.54)"/><path d="M560.86,2750A29.1,29.1,0,0,0,527,2773.47L468.34,3096a29.13,29.13,0,1,0,57.32,10.43l58.64-322.49A29.11,29.11,0,0,0,560.86,2750Z" transform="translate(-330.17 -2749.54)"/></svg></NavLink>

          <a href="#"></a>
        </div>
        <div className="sidebar__link">
          <NavLink to="growbot"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.37 368.37"><title>growbot</title><path d="M543,621.16v.05a89.15,89.15,0,0,0,93.84-99.13,89.45,89.45,0,0,0-70,27.71,88.13,88.13,0,0,0-18.43,29.61,128.92,128.92,0,0,0-32.59-62.19C488.61,488.43,451.17,475,414,476.88c-4,37,7.44,75.16,34.69,104C474.07,607.68,508.36,621,543,621.16Z" transform="translate(-341.12 -364.83)"/><path d="M687.56,364.83H363.06a22,22,0,0,0-21.94,21.94v324.5a21.94,21.94,0,0,0,21.94,21.93h324.5a21.93,21.93,0,0,0,21.93-21.93V386.77A21.94,21.94,0,0,0,687.56,364.83ZM665.63,689.34H385V408.7H665.63Z" transform="translate(-341.12 -364.83)"/></svg></NavLink>
        
        
          <a href="#"></a>
        </div>
        <div className="sidebar__link">
        <NavLink to="charts"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.32 320.32"><title>charts</title><path d="M5.9,67.44H78.4a5.9,5.9,0,0,1,5.9,5.9v247a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0v-247a5.9,5.9,0,0,1,5.9-5.9Z"/><path d="M123.91,0h72.5a5.9,5.9,0,0,1,5.9,5.9V320.32a0,0,0,0,1,0,0H118a0,0,0,0,1,0,0V5.9a5.9,5.9,0,0,1,5.9-5.9Z"/><path d="M241.92,151.73h72.5a5.9,5.9,0,0,1,5.9,5.9V320.32a0,0,0,0,1,0,0H236a0,0,0,0,1,0,0V157.63a5.9,5.9,0,0,1,5.9-5.9Z"/></svg></NavLink>

          <a href="#"></a>
        </div>
        <div className="sidebar__link">
        <NavLink to="courses"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357.04 393.7"><title>courses</title><path d="M677.47,2053.09H426.6a27.18,27.18,0,1,1,0-54.36H677.47a26.32,26.32,0,0,0-.08-52.63H426.6a79.9,79.9,0,0,0-79.81,79.81V2260a79.89,79.89,0,0,0,79.81,79.8H677.47a26.38,26.38,0,0,0,26.36-26.34v-234A26.4,26.4,0,0,0,677.47,2053.09ZM399.41,2101a79.82,79.82,0,0,0,27.19,4.76H651.12v181.46H426.6A27.22,27.22,0,0,1,399.41,2260Z" transform="translate(-346.79 -1946.1)"/></svg></NavLink>

          <a href="#"></a>
        </div>
        <div className="sidebar__link">
        <NavLink to="settings"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393.1 393.1"><title>settings</title><path d="M715.45,3708.45a18.33,18.33,0,0,0-13.62-5.7H672.67a161.82,161.82,0,0,0-6-19.19,142.11,142.11,0,0,0-8.26-18.09l22.68-23a17.6,17.6,0,0,0,5.76-13.3,18.83,18.83,0,0,0-5.76-13.63l-28-28a19,19,0,0,0-27.25,0l-20.78,20.71a136.29,136.29,0,0,0-17.62-9.57,180.43,180.43,0,0,0-18.8-7.33v-31.85a19,19,0,0,0-19.19-19.19h-40A18.69,18.69,0,0,0,496,3545.9a18.37,18.37,0,0,0-5.7,13.63v29.16a142.06,142.06,0,0,0-19.39,6,150.14,150.14,0,0,0-17.89,8.25l-23-22.67a17.59,17.59,0,0,0-13.29-5.77,18.83,18.83,0,0,0-13.63,5.77l-28,28.05a19,19,0,0,0,0,27.25l20.71,20.77a138.58,138.58,0,0,0-9.56,17.61,183.83,183.83,0,0,0-7.34,18.81H347.13a19,19,0,0,0-19.2,19.2v40a18.71,18.71,0,0,0,5.56,13.43,18.39,18.39,0,0,0,13.63,5.7h29.15a143.8,143.8,0,0,0,6,19.38,178.43,178.43,0,0,0,8.25,18.28l-22.67,22.6a17.62,17.62,0,0,0-5.76,13.31,18.85,18.85,0,0,0,5.76,13.63l28.05,28.37a19.94,19.94,0,0,0,27.25,0l20.77-21.09a140,140,0,0,0,17.62,9.56,185.25,185.25,0,0,0,18.81,7.34v31.84a19,19,0,0,0,19.19,19.2h40a18.67,18.67,0,0,0,13.43-5.58,18.36,18.36,0,0,0,5.69-13.62v-29.16a143,143,0,0,0,19.39-6,176.36,176.36,0,0,0,18.28-8.26l22.6,22.68a18.63,18.63,0,0,0,26.94,0l28.37-28a19.34,19.34,0,0,0,5.38-13.63,19.14,19.14,0,0,0-5.38-13.63l-21.09-20.77a140,140,0,0,0,9.57-17.62A187.55,187.55,0,0,0,670,3781h31.84a19,19,0,0,0,19.19-19.2v-40A18.66,18.66,0,0,0,715.45,3708.45Zm-191,111.43a83,83,0,1,1,83-83A83,83,0,0,1,524.47,3819.88Z" transform="translate(-327.93 -3540.34)"/></svg></NavLink>

          <a href="#"></a>
        </div>
       
        <div className="sidebar__logout">
    
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.05 359.58"><title>logout</title><path d="M557.54,5647.63H401.77a63,63,0,0,1-63-63V5351a63,63,0,0,1,63-63H557.54a24,24,0,0,1,0,48.05H401.77A14.94,14.94,0,0,0,386.85,5351v233.65a14.94,14.94,0,0,0,14.92,14.91H557.54a24,24,0,0,1,0,48.05Zm77.88-97.35a24,24,0,0,1-17-41l17.4-17.4H479.65a24,24,0,0,1,0-48.05H635.83l-17.4-17.4a24,24,0,0,1,34-34l58.41,58.41a24.28,24.28,0,0,1,5.23,7.83,23.92,23.92,0,0,1,1.8,8.73h0v0c0,.27,0,.55,0,.83h0a23.92,23.92,0,0,1-7,16.56s0,0,0,0l-58.37,58.37A24,24,0,0,1,635.42,5550.28Z" transform="translate(-338.81 -5288.05)"/></svg>
        </div>
      </div>
    </div>
    <Routes>
      <Route index element = {<Programming/>}/>
      <Route path="controls" element ={<Controls/>}/>
      <Route path ="chart" element ={<Chart/>}/>
      <Route path ="courses" element = {<Courses/>}/>
      <Route path ="settings" element = {<Settings/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default Sidebar;
