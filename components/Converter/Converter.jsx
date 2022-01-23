import React, { useState } from 'react';
import styles from './Converter.module.css';

const ratesUrl = 'https://api.coingate.com/v2/rates';

function Converter({ data }) {
  const crypto = [...Object.keys(data.trader.buy)];

  const currAndCryptoArr = [...Object.keys(data.merchant.ADA)];

  const currArr = currAndCryptoArr.filter((item) => !crypto.includes(item));
  // console.log(currArr);

  const [payCurrency, setPayCurrency] = useState('');
  const [buyCurrency, setBuyCurrency] = useState('');

  return (
    <>
      <div className={styles.bg}></div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <div className={styles.payContainer}>
            <input className={styles.input} type="number" />
            <span className={styles.pay}>Pay</span>
            <select className={styles.payCurr} value={payCurrency} onChange={(e) => setPayCurrency(e.target.value)}>
              {currArr.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.buyContainer}>
            <input className={styles.input} type="number" />
            <span className={styles.buy}>Buy</span>
            <select className={styles.buyCurr} value={buyCurrency} onChange={(e) => setBuyCurrency(e.target.value)}>
              {crypto.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
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

// export async function getServerSideProps(context) {
//   const data = await fetch(ratesUrl);
//   const rates = await data.json();
//   console.log(rates);

//   return { props: { currencies } };
// }

export default Converter;
