'use client';

import type { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, FreeMode, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';
import { IoStar } from 'react-icons/io5';

interface ITestimonial {
  id: number;
  text: string;
  name: string;
}

interface ITestimonials {
  testimonials: ITestimonial[];
}

const Testimonials: FC<ITestimonials> = ({ testimonials }) => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.top}>
        <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.buttonGroup}>
          <button type='button' id='prev' className={styles.swiperNavigation}>
            <svg xmlns='http://www.w3.org/2000/svg' width='70' height='71' viewBox='0 0 70.6 70.6'>
              <path d='m 30.2 5.1 l 3.6 3.9 l -21.4 23.4 h 55.4 v 5.8 H 12.3 l 21.4 23.4 l -3.6 3.9 L 2.5 35.3 Z'></path>
            </svg>
          </button>
          <button type='button' id='next' className={styles.swiperNavigation}>
            <svg xmlns='http://www.w3.org/2000/svg' width='70' height='71' viewBox='0 0 70.6 70.6'>
              <path d='m40.42 65.48-3.57-3.9 21.43-23.36H2.92v-5.84h55.36L36.85 9.01l3.57-3.89L68.1 35.3Z'></path>
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        modules={[A11y, FreeMode, Keyboard, Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: {
            navigation: false,
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode
        navigation={{
          nextEl: '#next',
          prevEl: '#prev',
        }}
        pagination={{ clickable: true }}
        loop={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
      >
        {testimonials.map(({ id, text, name }) => (
          <SwiperSlide key={id}>
            <div className={styles.swiperSlide}>
              <svg
                className={styles.svg}
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width={128}
                height={148}
                viewBox='0 0 117 101'
              >
                <g>
                  <path d='M26.3-127.2c-7.5,0-13.7-2.4-18.5-7.2c-4.8-4.8-7.2-10.9-7.2-18.5c0-7.5,2.4-13.6,7.2-18.4c4.8-4.8,10.9-7.2,18.5-7.2 c7.5,0,13.6,2.4,18.4,7.2c4.8,4.8,7.2,11,7.2,18.4c0,7.5-2.4,13.7-7.2,18.5C40-129.6,33.8-127.2,26.3-127.2z M7,98.7V79.8h10.8 c9.6,0,14.4-4.8,14.4-14.4V51h-5.8c-7.2,0-13.3-2.3-18.2-7c-5-4.6-7.4-10.6-7.4-17.8S3.1,13.1,8.1,8.4c5-4.6,11-7,18.2-7 c7.2,0,13.3,2.5,18.2,7.4c5,5,7.4,11,7.4,18.2v37.4c0,22.8-11.2,34.2-33.8,34.2H7z'></path>
                </g>
                <g>
                  <path d='M82.2,99.2H70.4V79.3h11.3c9.4,0,13.9-4.5,13.9-13.9V51.5h-5.3c-7.3,0-13.5-2.4-18.6-7.1c-5-4.7-7.6-10.8-7.6-18.1 c0-7.3,2.6-13.4,7.6-18.1C76.7,3.3,83,1,90.3,1c7.3,0,13.6,2.5,18.6,7.6s7.6,11.3,7.6,18.6v37.4C116.4,87.5,104.9,99.2,82.2,99.2z M71.4,98.2h10.8c22.4,0,33.2-11,33.2-33.7V27.1c0-7-2.4-13-7.3-17.9C103.3,4.4,97.3,2,90.3,2c-7,0-13,2.3-17.9,6.8 c-4.8,4.5-7.3,10.4-7.3,17.4c0,7,2.4,12.9,7.3,17.4c4.8,4.5,10.9,6.8,17.9,6.8h6.3v14.9c0,9.9-5,14.9-14.9,14.9H71.4V98.2z M90.3-126.7c-7.6,0-13.9-2.5-18.8-7.3c-4.9-4.9-7.3-11.2-7.3-18.8c0-7.6,2.5-13.9,7.3-18.8c4.9-4.9,11.2-7.3,18.8-7.3 c7.6,0,13.9,2.5,18.8,7.3c4.9,4.9,7.3,11.2,7.3,18.8c0,7.6-2.5,13.9-7.3,18.8C104.2-129.2,97.9-126.7,90.3-126.7z M90.3-178 c-7.3,0-13.4,2.4-18.1,7.1c-4.7,4.7-7.1,10.8-7.1,18.1c0,7.3,2.4,13.4,7.1,18.1c4.7,4.7,10.8,7.1,18.1,7.1c7.3,0,13.4-2.4,18.1-7.1 c4.7-4.7,7.1-10.8,7.1-18.1c0-7.3-2.4-13.4-7.1-18.1C103.7-175.7,97.6-178,90.3-178z'></path>
                </g>
              </svg>
              <div className={styles.reviewBody}>
                <div className={styles.rating}>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <p className={styles.reviewText}>{text}</p>
                <p className={styles.name}>{name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
