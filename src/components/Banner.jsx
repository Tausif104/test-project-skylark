import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper'
import BannerBg from '../assets/images/banner-bg.jpg'
import ArrowYellow from '../assets/images/arrow-yellow.png'
import ArrowRight from '../assets/images/arrow-right.png'
import ArrowLeft from '../assets/images/arrow-left.png'

// swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <section className='banner-section' style={{ backgroundImage: `url(${BannerBg})` }}>
      <div className='container'>
        <div className='banner-nav'>
          <span className='prev-banner'>
            <img src={ArrowLeft} alt='' />
          </span>
          <span className='next-banner'>
            <img src={ArrowRight} alt='' />
          </span>
        </div>
        <Swiper
          loop={true}
          navigation={{
            prevEl: '.prev-banner',
            nextEl: '.next-banner',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper2'
        >
          <SwiperSlide>
            <div className='single-slide-item'>
              <h4>About us</h4>
              <h2>Skylark is a dolor sit amet consectetur. Sem at pellentesque in tellus. Eu nibh dolor erat egestas. Malesuada.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. In enim aliquam porttitor. Condimentum amet consectetur egestas vel libero varius. Feugiat magna dolor odio penatibus consequat est auctor.
                Ligula purus faucibus integer eget risus. Fermentum aenean gravida netus et quis quis. Elit mattis quisque sed.
              </p>
              <a href='#' className='button'>
                <img src={ArrowYellow} alt='' /> Learn More
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='single-slide-item'>
              <h4>Our Team</h4>
              <h2>Skylark is a dolor sit amet consectetur. Sem at pellentesque in tellus. Eu nibh dolor erat egestas. Malesuada.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. In enim aliquam porttitor. Condimentum amet consectetur egestas vel libero varius. Feugiat magna dolor odio penatibus consequat est auctor.
                Ligula purus faucibus integer eget risus. Fermentum aenean gravida netus et quis quis. Elit mattis quisque sed.
              </p>
              <a href='#' className='button'>
                <img src={ArrowYellow} alt='' /> Learn More
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='single-slide-item'>
              <h4>Where we are</h4>
              <h2>Skylark is a dolor sit amet consectetur. Sem at pellentesque in tellus. Eu nibh dolor erat egestas. Malesuada.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. In enim aliquam porttitor. Condimentum amet consectetur egestas vel libero varius. Feugiat magna dolor odio penatibus consequat est auctor.
                Ligula purus faucibus integer eget risus. Fermentum aenean gravida netus et quis quis. Elit mattis quisque sed.
              </p>
              <a href='#' className='button'>
                <img src={ArrowYellow} alt='' /> Learn More
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='single-slide-item'>
              <h4>Contact Us</h4>
              <h2>Skylark is a dolor sit amet consectetur. Sem at pellentesque in tellus. Eu nibh dolor erat egestas. Malesuada.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. In enim aliquam porttitor. Condimentum amet consectetur egestas vel libero varius. Feugiat magna dolor odio penatibus consequat est auctor.
                Ligula purus faucibus integer eget risus. Fermentum aenean gravida netus et quis quis. Elit mattis quisque sed.
              </p>
              <a href='#' className='button'>
                <img src={ArrowYellow} alt='' /> Learn More
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='banner-slider-nav'>
          <Swiper onSwiper={setThumbsSwiper} loop={false} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className='mySwiper'>
            <SwiperSlide>
              <span>About Us</span>
            </SwiperSlide>
            <SwiperSlide>
              <span>Our Team</span>
            </SwiperSlide>
            <SwiperSlide>
              <span>Where we are</span>
            </SwiperSlide>
            <SwiperSlide>
              <span>Contact Us</span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Banner
