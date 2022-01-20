import Nav from '../components/Nav/Nav';
import styles from '../styles/Home.module.css';
import Header from './../components/Header/Header';

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.bg}></div>
        <Header />
      </main>
    </>
  );
}
