import Button from '../../Button/Button';
import Image from 'next/image';
import styles from './Projects.module.css';
import studioImg from './img/agency-port-list-img-1.jpg';
import designImg from './img/agency-port-list-img-2.png';
import agencyImg from './img/agency-port-list-img-3.jpg';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>Projects</h2>
          <Button className={styles.button}>View all projects</Button>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <div className={styles.imgBody}>
              <Image className={styles.img} src={studioImg} alt='studio' />
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionTop}>
                <div className={styles.descriptionLeft}>
                  <h3 className={styles.descriptionTitle}>Studio</h3>
                  <p className={styles.descriptionText}>
                    Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed do eiu smod
                    tempor inci didunt et.
                  </p>
                </div>
                <div className={styles.descriptionRight}>
                  <svg
                    className={styles.arrow}
                    xmlns='http://www.w3.org/2000/svg'
                    width='38'
                    height='38'
                  >
                    <path
                      data-name='Path 1535'
                      d='M35.999 29.291h-3.715V7.001L3.49 35.792.704 33.006 29.495 4.215H7.205V.5h28.791Z'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={styles.descriptionMid}>
                <h3 className={styles.descriptionMidTitle}>AWARDS</h3>
                <p>Social Media Advertising</p>
                <p>Email Marketing</p>
                <p>Lead Generation</p>
                <p>Content Marketing</p>
                <p>New Design</p>
              </div>
              <div className={styles.descriptionBottom}>
                <p>ART, DESIGN - 2023</p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.description}>
              <div className={styles.descriptionTop}>
                <div className={styles.descriptionLeft}>
                  <h3 className={styles.descriptionTitle}>Design</h3>
                  <p className={styles.descriptionText}>
                    Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed do eiu smod
                    tempor inci didunt et.
                  </p>
                </div>
                <div className={styles.descriptionRight}>
                  <svg
                    className={styles.arrow}
                    xmlns='http://www.w3.org/2000/svg'
                    width='38'
                    height='38'
                  >
                    <path
                      data-name='Path 1535'
                      d='M35.999 29.291h-3.715V7.001L3.49 35.792.704 33.006 29.495 4.215H7.205V.5h28.791Z'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={styles.descriptionMid}>
                <h3 className={styles.descriptionMidTitle}>AWARDS</h3>
                <p>Social Media Advertising</p>
                <p>Email Marketing</p>
                <p>Lead Generation</p>
                <p>Content Marketing</p>
                <p>New Design</p>
              </div>
              <div className={styles.descriptionBottom}>
                <p>ART, DESIGN - 2023</p>
              </div>
            </div>
            <div className={styles.imgBody}>
              <Image className={styles.img} src={designImg} alt='design' />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgBody}>
              <Image className={styles.img} src={agencyImg} alt='agency' />
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionTop}>
                <div className={styles.descriptionLeft}>
                  <h3 className={styles.descriptionTitle}>Agency</h3>
                  <p className={styles.descriptionText}>
                    Lorem ipsum dolor sit amet, con sectetur adi piscing elit, sed do eiu smod
                    tempor inci didunt et.
                  </p>
                </div>
                <div className={styles.descriptionRight}>
                  <svg
                    className={styles.arrow}
                    xmlns='http://www.w3.org/2000/svg'
                    width='38'
                    height='38'
                  >
                    <path
                      data-name='Path 1535'
                      d='M35.999 29.291h-3.715V7.001L3.49 35.792.704 33.006 29.495 4.215H7.205V.5h28.791Z'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={styles.descriptionMid}>
                <h3 className={styles.descriptionMidTitle}>AWARDS</h3>
                <p>Social Media Advertising</p>
                <p>Email Marketing</p>
                <p>Lead Generation</p>
                <p>Content Marketing</p>
                <p>New Design</p>
              </div>
              <div className={styles.descriptionBottom}>
                <p>ART, DESIGN - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
