import "./Navbar.css";
import avatar from "../../assets/logo_no_text_green.png";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      {/* <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div> */}
      <div className="navbar__left">
        <a href="#">Driven Orca</a>
      
      </div>
      <div className="navbar__right">
     
        <a href="#">
        tinyfarms ID: 7
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
