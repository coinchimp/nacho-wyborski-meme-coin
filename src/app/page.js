// src/app/page.js
import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nacho Wyborski KRC20 Meme Coin</title>
        <meta name="description" content="Nacho Wyborski KRC20 Meme Coin" />
        <link rel="icon" href="/kaspa_logo_nacho.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/kaspa_logo_nacho.png" alt="Nacho Wyborski Logo" width={150} height={150} className={styles.logo} />
        <h1 className={styles.title}>
          Nacho Wyborski KRC20 Meme Coin
        </h1>
        <p className={styles.description}>
          fair launch<br/>
          no presale<br/>
          no pre-allocation<br/>
        </p>
        <h2 className={styles.title}>
          coming soon!
        </h2>        
      </main>
    </div>
  )
}
