import Logo from '../assets/images/logo.png'
import Bars from '../assets/images/bars.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const MobileMenu = () => {
  const [active, setActive] = useState(false)

  const handleMenuTrigger = () => {
    setActive(true)
  }

  const handleMenuClose = () => {
    setActive(false)
  }
  return (
    <>
      <div className={`offcanvas-menu ${active ? 'active-mobile-menu' : ''}`}>
        <div className='offcanvas-inner'>
          <span className='site-logo'>
            <img src={Logo} alt='' />
          </span>
          <ul>
            <li>
              <Link to='/'>WHO WE ARE</Link>
            </li>
            <li>
              <Link to='/'>WHAT WE DO</Link>
            </li>
            <li>
              <Link to='/'>SECTORS</Link>
            </li>
            <li>
              <Link to='/'>TRANSACTIONS</Link>
            </li>
            <li>
              <Link to='/'>Our People</Link>
            </li>
            <li>
              <Link to='/'>Global Reach</Link>
            </li>
            <li>
              <Link to='/'>Newsletter</Link>
            </li>
            <li>
              <Link to='/'>Contact us</Link>
            </li>
          </ul>

          <span className='mobile-close-btn' onClick={handleMenuClose}>
            Close
          </span>
        </div>
      </div>
      <div className='mobile-menu-wrapper'>
        <div className='container'>
          <span className='site-logo'>
            <img src={Logo} alt='' />
          </span>
          <span onClick={handleMenuTrigger} className='bars'>
            <img src={Bars} alt='' />
          </span>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
