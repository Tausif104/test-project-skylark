import LinkedIn from '../assets/images/LinkedIn.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer-top'>
        <div className='container'>
          <ul>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Team</a>
            </li>
            <li>
              <a href='/'>How we can help</a>
            </li>
            <li>
              <a href='/'>Sector Expertise</a>
            </li>
            <li>
              <a href='/'>Deals</a>
            </li>
            <li>
              <a href='/'>News & Insights</a>
            </li>
            <li>
              <a href='/'>Careers</a>
            </li>
            <li>
              <a href='/'>Contact US</a>
            </li>
            <li>
              <a href='/' className='primary-btn'>
                Subscribe to our news
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <ul>
            <li>
              <span>&copy; Capitalmind 2022</span>
            </li>
            <li>
              <a href=''>Privacy Policy</a>
            </li>
            <li>
              <a href=''>Terms & Conditions</a>
            </li>
            <li>
              <a href=''>A Website by Skylark Creative</a>
            </li>
          </ul>
          <span>
            <a href='#'>
              <img src={LinkedIn} alt='' />
              Follow Us on Linkedin
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
