import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className='Navbar'>
      <img src={logo} alt='logo' className='logo'></img>

      <div className='Searchbar'>
        <input type='text' placeholder='Search for movies'></input>
        <FaSearch  className='Search-icon'/>
      </div>

      <div className='Dropdown'>
        <button >Location</button>
        <IoMdArrowDropdown className='Dropdoen-icon'/>
        <div className='Content'>
        <a href='#'>Chennai</a>
        <a href='#'>Delhi</a>
        <a href='#'>Banglore</a>
        <a href='#'>Pune</a>
        <a href='#'>Hydrabad</a>
        <a href='#'>Cochi</a>
        <a href='#'>Ahmedabad</a>
      </div>

      </div>


      <div className='Signin-button'>
      <Link to='/signin'>
      <button type='submit'>Signin</button>
      </Link>
      </div>

    </div>


  )
}

export default Header