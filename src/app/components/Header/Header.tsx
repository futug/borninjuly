'use client';
import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import Burger from './Burger/Burger';
import styles from './Header.module.css';
import FormSidebar from './FormSidebar/FormSidebar';
import { useState } from 'react';

export const Header = () => {
  const [isFormSidebarOpen, setIsFormSidebarOpen] = useState(false);

  useEffect(() => {
    if (isFormSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  })
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
      name: 'Projects',
      path: '#projects',
    },
    {
      name: 'Contact',
      path: '#contacts',
    },
  ];
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar linkArr={navLinks} />
      <Burger setIsFormSidebarOpen={setIsFormSidebarOpen}/>
      <FormSidebar linkArr={navLinks} isFormSidebarOpen={isFormSidebarOpen} setIsFormSidebarOpen={setIsFormSidebarOpen}/>
    </header>
  );
};
