import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Game Carousel</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={styles.header}>
        <button>Login</button>
      </header>
      <main className={styles.main}>
        <aside className={styles.categories}>
          Categories
        </aside>
        <section className={styles.gamesList}>
          Games List
        </section>
      </main>
    </div>
  )
}
