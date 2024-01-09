import React from 'react';
import styles from './Maincontent.module.css';
import Container from '../Container/Container';
import Features from './Features/Features';
import Projects from './Projects/Projects';
import TeamPhoto from './TeamPhoto/TeamPhoto';
import Testimonials from './Testimonials/Testimonials';

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

  return (
    <div className={styles.maincontent}>
      <Container padding='2rem' margin='0 auto'>
        <Features />
        <Projects />
        <TeamPhoto />
        <Testimonials testimonials={testimonials} />
      </Container>
    </div>
  );
};
