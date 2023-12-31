import React, { useState } from 'react';
import Logo from '../Assets/React_Native.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? 'open' : 'close'}>
            <img src={Logo} alt='text'/>
            <div className='hiddenLinks'>
              <Link to="/"> Home </Link>
              <Link to="/projects"> Projects </Link>
              <Link to="/about"> About </Link>
              <Link to="/contact"> Contacts </Link>
            </div>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar;
