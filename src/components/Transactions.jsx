import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper'

import 'swiper/css'
import 'swiper/css/scrollbar'

import BrandOne from '../assets/images/brands/1.png'
import BrandTwo from '../assets/images/brands/2.png'
import BrandThree from '../assets/images/brands/3.png'
import BrandFour from '../assets/images/brands/4.png'
import BrandFive from '../assets/images/brands/5.png'
import BrandSix from '../assets/images/brands/6.png'
import BrandSeven from '../assets/images/brands/7.png'
import BrandEight from '../assets/images/brands/8.png'
import FlagOne from '../assets/images/flags/1.png'
import FlagTwo from '../assets/images/flags/2.png'
import FlagThree from '../assets/images/flags/3.png'
import FlagFour from '../assets/images/flags/4.png'
import FlagFive from '../assets/images/flags/5.png'
import FlagSix from '../assets/images/flags/6.png'

const Transactions = () => {
  return (
    <>
      <section className='transaction-section'>
        <div className='container'>
          <div className='section-title'>
            <h2>Transactions</h2>
            <a href='' className='primary-btn black'>
              View all transactions
            </a>
          </div>
        </div>
        <div className='container'>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className='mySwiper'
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            loop={false}
            breakpoints={{
              991: {
                // width: 576,
                slidesPerView: 3,
              },
              768: {
                // width: 768,
                slidesPerView: 2,
              },
              0: {
                // width: 768,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className='transaction-slide-item'>
                <div className='slide-item-header'>
                  <span>Dec 2022</span>
                  <span>
                    <img src={FlagOne} alt='' />
                    <img src={FlagTwo} alt='' />
                  </span>
                </div>
                <div className='transaction-content'>
                  <img src={BrandOne} alt='' />
                  <h3>Growth Investment by</h3>
                  <div className='bottom-brands'>
                    <img src={BrandTwo} alt='' />
                    <img src={BrandThree} alt='' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='transaction-slide-item'>
                <div className='slide-item-header'>
                  <span>Dec 2022</span>
                  <span>
                    <img src={FlagThree} alt='' />
                    <img src={FlagFour} alt='' />
                  </span>
                </div>
                <div className='transaction-content'>
                  <img src={BrandFour} alt='' />
                  <h3>Growth Investment by</h3>
                  <div className='bottom-brands'>
                    <img src={BrandFive} alt='' />
                    <img src={BrandSix} alt='' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='transaction-slide-item'>
                <div className='slide-item-header'>
                  <span>Dec 2022</span>
                  <span>
                    <img src={FlagFive} alt='' />
                    <img src={FlagSix} alt='' />
                  </span>
                </div>
                <div className='transaction-content'>
                  <img src={BrandSeven} alt='' />
                  <h3>Growth Investment by</h3>
                  <div className='bottom-brands'>
                    <img src={BrandEight} alt='' />
                    <img src={BrandOne} alt='' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='transaction-slide-item'>
                <div className='slide-item-header'>
                  <span>Dec 2022</span>
                  <span>
                    <img src={FlagOne} alt='' />
                    <img src={FlagTwo} alt='' />
                  </span>
                </div>
                <div className='transaction-content'>
                  <img src={BrandOne} alt='' />
                  <h3>Growth Investment by</h3>
                  <div className='bottom-brands'>
                    <img src={BrandTwo} alt='' />
                    <img src={BrandThree} alt='' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='transaction-slide-item'>
                <div className='slide-item-header'>
                  <span>Dec 2022</span>
                  <span>
                    <img src={FlagThree} alt='' />
                    <img src={FlagTwo} alt='' />
                  </span>
                </div>
                <div className='transaction-content'>
                  <img src={BrandOne} alt='' />
                  <h3>Growth Investment by</h3>
                  <div className='bottom-brands'>
                    <img src={BrandFour} alt='' />
                    <img src={BrandSix} alt='' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='transaction-slide-item'>
                <div className='slide-item-header'>
                  <span>Dec 2022</span>
                  <span>
                    <img src={FlagFive} alt='' />
                    <img src={FlagTwo} alt='' />
                  </span>
                </div>
                <div className='transaction-content'>
                  <img src={BrandOne} alt='' />
                  <h3>Growth Investment by</h3>
                  <div className='bottom-brands'>
                    <img src={BrandTwo} alt='' />
                    <img src={BrandThree} alt='' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Transactions
