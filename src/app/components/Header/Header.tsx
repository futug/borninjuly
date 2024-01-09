'use client';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import Burger from './Burger/Burger';
import styles from './Header.module.css';
import FormSidebar from './FormSidebar/FormSidebar';
import { useState } from 'react';

export const Header = () => {
  const [isFormSidebarOpen, setIsFormSidebarOpen] = useState(false);
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
      path: '#contacts',
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
      <Burger setIsFormSidebarOpen={setIsFormSidebarOpen}/>
      <FormSidebar linkArr={navLinks} isFormSidebarOpen={isFormSidebarOpen} setIsFormSidebarOpen={setIsFormSidebarOpen}/>
    </header>
  );
};
