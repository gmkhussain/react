import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => (
    
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/data_fetch'>Data Fetch (API)</Link></li>
        <li><Link to='/d3-map'>D3 Map View</Link></li>
        <li><Link to='/redux-demo'>Redux Demo</Link></li>
        <li><Link to='/drag-and-drop'>Drag and Drop</Link></li>
    </ul>
   
)

export default Navbar;