import React from "react";
import { Link } from "react-router-dom"


const NavLink = (props) => {
    
    return <Link {...props} className="nav-link" />
}

export default NavLink