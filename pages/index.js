import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Niklas welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>

      <Counter name={"Pablo"} mult={1} size={2}/>
      <Counter name={"Pia"} mult={2} size={0.5}/>

      <p>Here is a link to this code on <a href='https://github.com/NiklasReiswig/first-nextJS'>github</a>. For the final project I am interested in DDOS with websites so I would like to learn and teach about them.</p>
      
    </div>
  );
}
