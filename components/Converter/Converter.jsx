import React from 'react';
import styles from './Converter.module.css';

function Converter() {
  return (
    <div className={styles.converterContainer}>
      <div className={styles.bg}></div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <input className={styles.input} type="number" placeholder="Pay" />
          <input className={styles.input} type="number" placeholder="Buy" />
        </div>
        <p className={styles.text}>Payment method</p>
        <select className={styles.select} name="payment" id="payment">
          <option value="bank">Bank transfer</option>
          <option value="debit">Debit card</option>
          <option value="apple">Apple pay</option>
        </select>
        <button className={styles.btn}>Buy BTC</button>
      </form>
    </div>
  );
}

export default Converter;
