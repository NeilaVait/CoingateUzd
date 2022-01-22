import React from 'react';
import styles from './Converter.module.css';
import btc from '../../public/arrowGreen.png';
import Image from 'next/image';

function Converter() {
  return (
    <>
      <div className={styles.bg}></div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <div className={styles.payContainer}>
            <input className={styles.input} type="number" />
            <span className={styles.pay}>Pay</span>

            <select className={styles.payCurr} name="" id="">
              <option id="eur" value="">
                EUR
              </option>
              <option value="">EUR</option>
              <option value="">EUR</option>
              <option value="">EUR</option>
            </select>
          </div>
          <div className={styles.buyContainer}>
            <input className={styles.input} type="number" />
            <span className={styles.buy}>Buy</span>
            <select className={styles.buyCurr} name="" id="">
              <option value="">BTC</option>
              <option value="">BTC</option>
              <option value="">BTC</option>
              <option value="">BTC</option>
            </select>
          </div>
        </div>
        <p className={styles.text}>Payment method</p>
        <select className={styles.select} name="payment" id="payment">
          <option value="bank">Bank transfer</option>
          <option value="debit">Debit card</option>
          <option value="apple">Apple pay</option>
        </select>
        <button className={styles.btn}>Buy BTC</button>
      </form>
    </>
  );
}

export default Converter;
