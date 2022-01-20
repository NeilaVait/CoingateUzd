import React from 'react';
import styles from './Header.module.css';
import arrowGreen from '../../public/arrowGreen.png';
import Image from 'next/image';
import Converter from '../Converter/Converter';

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          <span className={styles.green}>Buy Bitcoin, </span>
          <span>Ethereum, Litecoin and other crypto </span>
          <span className={styles.green}>online</span>
        </h1>
        <p className={styles.paragraph}>
          Why bother going through complicated exchanges? Buy cryptocurrency with top payment methods like SEPA bank
          transfer, Credit and Debit Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or any
          other popular crypto directly to your personal wallet without making any initial deposits. It&apos;s as easy
          as it gets!
        </p>

        <a className={styles.link} href="">
          <span>Start now</span> <Image width={7} height={7} src={arrowGreen} alt="arrow" />
        </a>
      </div>
      <div className={styles.converter}>
        <Converter />
      </div>
    </div>
  );
}

export default Header;
