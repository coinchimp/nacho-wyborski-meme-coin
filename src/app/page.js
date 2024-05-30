// src/app/page.js
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import Banner from './Banner';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className={styles.bannerText}>
        <Image src="/kaspa_logo_nacho.png" alt="Nacho the 𐤊at Logo" width={150} height={150} className={styles.logo} />
        <h1 className={styles.title}>
          Nacho the 𐤊at
        </h1>  
        <p>
         <span className={styles.highlight}>Join our community</span>, in making <span className={styles.highlight}>Nacho the 𐤊at</span> the perfect example of fairness and the true spirit of <span className={styles.highlight}>Kaspa and KRC20!</span>
        </p>
      </div>
      <div className={styles.featuresSection}>
        <Image src="/nacho_chart.jpg" alt="Features Image" width={450} height={450} className={styles.featuresImage} />
        <div className={styles.featuresText}>
          <h2>Launch Conditions</h2>
          <ul>
            <li><span className={styles.highlight}>Community Driven:</span> Our decisions are based on community discussions. Join our Discord to be part of it.</li>
            <li><span className={styles.highlight}>Fair Launch:</span> No team member gets tokens in advance. Everyone can mint their tokens according to the KRC20 standard, ensuring equal opportunities for all.</li>
            <li><span className={styles.highlight}>Transparent Tokenomics:</span> Maximum supply and other details are being discussed as a community in Discord. Join us!   <span className={styles.highlight2}><a href="#" target="_blank" rel="noopener noreferrer">[whitepaper]</a></span> </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
          This project is community-driven, and there is no legal or official representation. The information provided here does not constitute financial advice, and we do not recommend this project as an investment. We are not affiliated with any company or group, including KRC20, Kaspa, and Kasplex. We are not in control of or responsible for any changes to KRC20 standards or the unavailability of any app or tool to mint, swap, or perform any operation that may affect this initiative.
      </div>
    </div>
  );
}
