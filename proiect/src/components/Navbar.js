import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import ubiLogo from '../img/ubiLogo.png'
import './Navbar.css'

//import { FaTimes } from "react-icons/fa";
//import { FaBars } from "react-icons/fa";


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <img src={ubiLogo} alt='ubiLogo' className='navbar-logo'/>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fa fa-times' : 'fa fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar