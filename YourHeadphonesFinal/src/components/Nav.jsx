import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

function Nav(props) {
  return (
    <>
    <div className="container">
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="logo"><img src="src\images\logo.png" alt="Logo" /></li>
          <li className="yazi"><img src="src\images\YOUR_Headphones.png" alt="Yazi" /></li>
          <ul className="aboutul navbar-nav">
            <li><NavLink className="btn3 nav-link"  to="/">HOME</NavLink></li>
            <li><NavLink className="btn3 nav-link"  to="/catalog">CATALOG</NavLink></li>
            <li> <NavLink className="btn3 nav-link"  to="/aboutus">ABOUT US</NavLink></li>
            
            </ul>
            <ul className="buttonul navbar-nav">
            <li><button className=" btn1 nav-item singin" ><NavLink className="nav-link "  to="/singin">Sing In</NavLink></button></li>
            <li><button className="btn2 nav-item" ><NavLink className="nav-link singup"  to="/singup">Sing Up</NavLink></button></li>
            <NavItem />
            </ul>
          </ul>
          
        </div>
      </div>
    </nav>
    </div>
    </>
  );
}

export default Nav;
