import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { PiCopyright } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="nav">
        <Link to="/" className="profile"><CgProfile /></Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">Home</Link>
        <footer><PiCopyright className="cprt"/><div className="rights">All Rights Reserved</div></footer>
    </div>
  )
}

export default Navbar