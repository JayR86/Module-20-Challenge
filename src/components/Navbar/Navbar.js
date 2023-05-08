import {useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'
const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
          <li className='nav__list-item'>
            <a
              href='#aboutme'
              onClick={toggleNavList}
              className='link link--nav'
            >
              About me
            </a>
          </li>
          <li className='nav__list-item'>
            <a
              href='#portfolio'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Portfolio
            </a>
          </li>
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
          <li className='nav__list-item'>
            <a
              href='#resume'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Resume
            </a>
          </li>
      </ul>


      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  )
}

export default Navbar
