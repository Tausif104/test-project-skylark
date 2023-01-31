import IconOne from '../assets/images/service-1.png'
import IconTwo from '../assets/images/service-2.png'
import IconThree from '../assets/images/service-3.png'

const Services = () => {
  return (
    <section className='service-section'>
      <div className='container grid'>
        <div className='service-item service-pink'>
          <img src={IconOne} alt='' />
          <div className='service-item-content'>
            <h3>Design</h3>
            <ul>
              <li>Branding</li>
              <li>Marketing collateral</li>
              <li>Presentation design</li>
              <li>UX/UI design</li>
            </ul>
            <div className='btn-wrapper'>
              <a href='#' className='primary-btn'>
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className='service-item service-blue'>
          <img src={IconTwo} alt='' />
          <div className='service-item-content'>
            <h3>
              Website <br /> Development
            </h3>
            <ul>
              <li>Wordpress</li>
              <li>Shopify</li>
              <li>Headless</li>
            </ul>
            <div className='btn-wrapper'>
              <a href='#' className='primary-btn'>
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className='service-item service-green'>
          <img src={IconThree} alt='' />
          <div className='service-item-content'>
            <h3>
              App <br /> Development
            </h3>
            <ul>
              <li>Web apps</li>
              <li>Mobile Apps</li>
            </ul>
            <div className='btn-wrapper'>
              <a href='#' className='primary-btn'>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
