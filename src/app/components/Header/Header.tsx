import React from 'react';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import Burger from './Burger/Burger';
import styles from './Header.module.css';

export const Header = () => {
  const navLinks = [
    {
      name: 'Home',
      path: '#',
    },
    {
      name: 'About',
      path: '#',
    },
    {
      name: 'Contact',
      path: '#',
    },
    {
      name: 'Blog',
      path: '#',
    },
  ];
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar linkArr={navLinks} />
      <Burger />
    </header>
  );
};
