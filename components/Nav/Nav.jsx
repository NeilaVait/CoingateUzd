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
        <div className={styles.menuContainer}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Products</li>
            <li className={styles.menuItem}>Resources</li>
            <li className={styles.menuItem}>Buy instantly</li>
          </ul>
          <div className={styles.btnContainer}>
            <button className={styles.login}>Log In</button>
            <button className={styles.signUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
