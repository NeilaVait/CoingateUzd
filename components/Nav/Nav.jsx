import React from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="logo" />
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>Products</li>
          <li className={styles.menuItem}>Resources</li>
          <li className={styles.menuItem}>Buy instantly</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
