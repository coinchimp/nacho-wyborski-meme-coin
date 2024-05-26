// src/app/page.js
import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nacho the 𐤊at KRC20 Meme Coin</title>
        <meta name="description" content="Nacho the 𐤊at KRC20 Meme Coin" />
        <link rel="icon" href="/kaspa_logo_nacho.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/kaspa_logo_nacho.png" alt="Nacho the 𐤊at Logo" width={150} height={150} className={styles.logo} />
        <h1 className={styles.title}>
          Nacho the 𐤊at
        </h1>      
        <h2 className={styles.title2}>    
          KRC20 Meme Coin<br/>
          coming soon!
        </h2>
        <p className={styles.description}>
          <br/>
          fair launch<br/>
          no presale<br/>
          no pre-allocation<br/>
        </p>      
      </main>
    </div>
  )
}
