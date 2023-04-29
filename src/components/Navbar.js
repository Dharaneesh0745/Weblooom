import { Link } from "react-router-dom";
import "./NavbarStyles.css";

// Imports two things from the react library,
// The React library itself and the useState hook.
import React, { useState } from "react";

// Imports the required icons from react-icons.
import { FaBars, FaTimes } from "react-icons/fa";

// This function is for responsive navbar.
/* When the size of the screen reduced means, then the navlinks were hidden,
   and there is a bars symbol if, we clicked the bar symbol, then it displays the navlinks.
   And also when the navlinks shows on the screen there is a "X" symbol present at the top of 
   the right corner, if we clicked that "X" symbol and the navbar will be hidden.
   If the navbar displays on the responsive screen means then the background color changes 
   to black color with low opacity, these things are done by upcoming 10 lines and CSS */ 
const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Webloom</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Courses</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{ color: "#fff"}}></FaTimes> ) : (
            <FaBars size={20} style={{ color: "#fff"}}></FaBars>
            )}
        </div>
    </div>
  )
}

export default Navbar