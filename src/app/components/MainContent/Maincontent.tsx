import React from 'react';
import styles from './Maincontent.module.css';
import Container from '../Container/Container';
import Features from './Features/Features';
import Projects from './Projects/Projects';
import TeamPhoto from './TeamPhoto/TeamPhoto';
import Testimonials from './Testimonials/Testimonials';
import Gallery from './Gallery/Gallery';
import Clients from './Clients/Clients';
import Hero from './Hero/Hero';
import FAQ from './FAQ/FAQ';
import Footer from '../Footer/Footer';
import photo1 from './Gallery/img/agency-gallery-img-1.jpg';
import photo2 from './Gallery/img/agency-gallery-img-2.jpg';
import photo3 from './Gallery/img/agency-gallery-img-3.jpg';
import photo4 from './Gallery/img/agency-gallery-img-4.jpg';
import photo5 from './Gallery/img/agency-gallery-img-5.jpg';
import photo6 from './Gallery/img/agency-gallery-img-6.jpg';

export const Maincontent = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Sed ut perspi ciatis unde om nis iste natus error sit vol upta tem accus an tium dol ore mque laud antium, totam rem aperiam, eaque ipsa.',
      name: 'Amy Pullman, designer',
    },
    {
      id: 2,
      text: 'Sed ut perspi ciatis unde om nis iste natus error sit vol upta tem accus an tium dol ore mque laud antium, totam rem aperiam, eaque ipsa.',
      name: 'Adrian Gray, director of NDH',
    },
    {
      id: 3,
      text: 'Sed ut perspi ciatis unde om nis iste natus error sit vol upta tem accus an tium dol ore mque laud antium, totam rem aperiam, eaque ipsa.',
      name: 'Emily Gill, producer',
    },
  ];

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <div className={styles.maincontent}>
      <Container padding='2rem' margin='0 auto'>
        <Hero />
        <Features />
        <Projects />
        <TeamPhoto />
        <Testimonials testimonials={testimonials} />
        <Gallery photos={photos} />
        <Clients />
        {/* <FAQ /> */}
        <Footer />
      </Container>
    </div>
  );
};
