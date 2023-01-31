import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Bars from '../assets/images/bars.png'
import WhiteArrow from '../assets/images/arrow-white.png'

const Header = () => {
  const [active, setActive] = useState(false)

  const handleMenuTrigger = () => {
    setActive(true)
  }

  const handleMenuClose = () => {
    setActive(false)
  }

  return (
    <>
      <div className={`mega-menu ${active ? 'active-menu' : ''}`}>
        <div className='mega-menu-top'>
          <div className='container'>
            <Link to='/'>
              <img src={Logo} alt='' />
            </Link>
            <div className='mega-menu-close'>
              <span onClick={handleMenuClose} className='close-btn'>
                Close
              </span>
            </div>
          </div>
        </div>
        <div className='mega-menu-bottom'>
          <div className='container'>
            <div className='mega-menus'>
              <div className='mega-menu-col'>
                <ul>
                  <li>
                    <a href=''>
                      Who we are <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      What we do <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      sectors <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      Transactions <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mega-menu-col'>
                <ul>
                  <li>
                    <a href=''>
                      Our people <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      global reach <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      newsletter <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      contact us <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mega-menu-col'>
                <ul>
                  <li>
                    <a href=''>
                      careers <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      working with us <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      newsletter <img src={WhiteArrow} alt='' />
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      privacy <img src={WhiteArrow} alt='' />{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className='container'>
          <nav>
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
                <Link to='/'>
                  <img src={Logo} alt='' />
                </Link>
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
              <li>
                <span onClick={handleMenuTrigger} className='menu-trigger'>
                  <img src={Bars} alt='' />
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
