import Nav from '../components/Nav/Nav';
import styles from '../styles/Home.module.css';
import Header from './../components/Header/Header';

export const getStaticProps = async () => {
  const res = await fetch(`https://api.coingate.com/v2/rates`);
  const data = await res.json();

  return {
    props: { data },
  };
};

export default function Home({ data }) {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.bg}></div>
        <Header data={data} />
      </main>
    </>
  );
}
