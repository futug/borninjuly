'use client';

import { type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, FreeMode, Keyboard } from 'swiper/modules';
import { ImEvil } from 'react-icons/im';
import { FaAmazon } from 'react-icons/fa';
import { BsMicrosoft } from 'react-icons/bs';
import { SiNetflix } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import 'swiper/css';
import styles from './Clients.module.css';

const Client: FC = () => {
  const clients = [
    <ImEvil key={1} />,
    <FaAmazon key={2} />,
    <BsMicrosoft key={3} />,
    <SiNetflix key={4} />,
    <FaGoogle key={5} />,
    <FaGithub key={6} />,
  ];

  return (
    <section className={styles.clients}>
      <Swiper
        className='clients-swiper'
        modules={[A11y, FreeMode, Keyboard, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
        freeMode
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className={styles.swiperSlide}>{client}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Client;
