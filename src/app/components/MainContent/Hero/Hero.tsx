'use client';
import { type FC } from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Navigation, EffectFade } from 'swiper/modules';
import Button from '../../Button/Button';
import Image from 'next/image';
import heroImage1 from './img/Agency-rev-img-1.jpg';
import heroImage2 from './img/agency-rev-img-2.jpg';
import heroImage3 from './img/agency-rev-img-3.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from './Hero.module.css';

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.swiperWrapper}>
        <Swiper
          className='hero-swiper'
          modules={[A11y, Keyboard, Navigation, Autoplay, EffectFade]}
          spaceBetween={40}
          slidesPerView={1}
          effect={'fade'}
          navigation={{
            nextEl: '#nexthero',
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div className={classNames(styles.swiperSlide, { [styles.active]: isActive })}>
                <Image src={heroImage1} alt='hero' />
                <div className={styles.overlay}>
                  <h2 className={styles.title}>
                    STUDIO <span>NARTSBERG</span>
                  </h2>
                  <p className={styles.text}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et.
                  </p>
                  <Button className={styles.button}>View all projects</Button>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isPrev }) => (
              <div className={classNames(styles.swiperSlide, { [styles.active]: isActive })}>
                <Image src={heroImage2} alt='hero' />
                <div className={styles.overlay}>
                  <h2 className={styles.title}>
                    STUDIO <span>FORSBERG</span>
                  </h2>
                  <p className={styles.text}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et.
                  </p>
                  <Button className={styles.button}>View all projects</Button>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className={classNames(styles.swiperSlide, { [styles.active]: isActive })}>
                <Image src={heroImage3} alt='hero' />
                <div className={styles.overlay}>
                  <h2 className={styles.title}>
                    STUDIO <span>OMBERG</span>
                  </h2>
                  <p className={styles.text}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et.
                  </p>
                  <Button className={styles.button}>View all projects</Button>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
        <button type='button' id='nexthero' className={styles.swiperNavigation}>
          <svg xmlns='http://www.w3.org/2000/svg' width='70' height='71' viewBox='0 0 70.6 70.6'>
            <path d='m40.42 65.48-3.57-3.9 21.43-23.36H2.92v-5.84h55.36L36.85 9.01l3.57-3.89L68.1 35.3Z'></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
