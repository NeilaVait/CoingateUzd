import React, { useState } from 'react';
import styles from './Converter.module.css';

const ratesUrl = 'https://api.coingate.com/v2/rates';

function Converter({ data }) {
  const cryptoArr = [...Object.keys(data.trader.buy)];

  const currAndCryptoArr = [...Object.keys(data.merchant.ADA)];

  const crypto = currAndCryptoArr.filter((item) => cryptoArr.includes(item));

  const currArr = currAndCryptoArr.filter((item) => !crypto.includes(item));

  const [payCurrency, setPayCurrency] = useState('EUR');
  const [buyCurrency, setBuyCurrency] = useState('BTC');

  const [amountInPayCurrency, setAmountInPayCurrency] = useState('0');
  const [amountInBuyCurrency, setAmountInBuyCurrency] = useState('0');

  const calcBuyRate = (enteredValue) => {
    // console.log(enteredValue);
    setAmountInPayCurrency(enteredValue);
    const rates = data.merchant[buyCurrency][payCurrency];
    // console.log(rates);
    const rate = 1 / rates;
    const amount = enteredValue * rate;
    // console.log(amount);
    setAmountInBuyCurrency(amount.toFixed(7));
  };

  const calcPayRate = (enteredValue) => {
    setAmountInBuyCurrency(enteredValue);
    // console.log(enteredValue);
    const rate = enteredValue * data.merchant[buyCurrency][payCurrency];
    console.log(rate);
    setAmountInPayCurrency(rate);
  };

  const setBuyCurrencyAndCalc = (currency) => {
    console.log(currency);
    if (amountInPayCurrency === 0) return;
    setBuyCurrency(currency);
    const rate = 1 / data.merchant[currency][payCurrency];
    setAmountInBuyCurrency(rate.toFixed(7));
  };

  const setPayCurrencyAndCalc = (currency) => {
    // console.log(currency);
    if (amountInBuyCurrency === 0) return;
    setPayCurrency(currency);

    const rate = data.merchant[buyCurrency][currency];
    setAmountInPayCurrency(rate);
  };

  return (
    <>
      <div className={styles.bg}></div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <div className={styles.payContainer}>
            <input
              maxLength={8}
              className={styles.input}
              type="number"
              value={amountInPayCurrency}
              onChange={(e) => calcBuyRate(e.target.value)}
            />
            <span className={styles.pay}>Pay</span>
            <select
              className={styles.payCurr}
              value={payCurrency}
              onChange={(e) => setPayCurrencyAndCalc(e.target.value)}
            >
              {currArr.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.buyContainer}>
            <input
              maxLength="8"
              className={styles.input}
              type="number"
              value={amountInBuyCurrency}
              onChange={(e) => calcPayRate(e.target.value)}
            />
            <span className={styles.buy}>Buy</span>
            <select
              className={styles.buyCurr}
              value={buyCurrency}
              onChange={(e) => setBuyCurrencyAndCalc(e.target.value)}
            >
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

export default Converter;
