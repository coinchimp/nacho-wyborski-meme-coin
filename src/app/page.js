// src/app/page.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import styles from './page.module.css';
import Banner from './Banner';

export default function Home() {
  return (
    <div>
      <Banner />
      <div className={styles.featuresSection}>
        <div className={styles.featuresText}>
          <h2>Launch Conditions</h2>
          <ul>
            <li><span className={styles.highlight}>Community Driven:</span> Our decisions are based on community discussions. Join our Discord to be part of it.</li>
            <li><span className={styles.highlight}>Fair Launch:</span> No team member gets tokens in advance. Everyone can mint their tokens according to the KRC20 standard, ensuring equal opportunities for all.</li>
            <li><span className={styles.highlight}>Transparent Tokenomics:</span> Maximum supply and other details are being discussed as a community in Discord. Join us!   <span className={styles.highlight2}><a href="/Nacho_the_at_Whitepaper_Draft_2.pdf" target="_blank" rel="noopener noreferrer">[whitepaper]</a></span> </li>
          </ul>
        </div>
      </div>
      <div className={styles.faqSection}>
        <p>
          For more information, check out our <span className={styles.highlight2}><Link href="/faq">[FAQ]</Link></span>
        </p>
      </div>  
      <div className={styles.bottomSection}>
          This project is community-driven, and there is no legal or official representation. The information provided here does not constitute financial advice, and we do not recommend this project as an investment. We are not affiliated with any company or group, including KRC20, Kaspa, and Kasplex. We are not in control of or responsible for any changes to KRC20 standards or the unavailability of any app or tool to mint, swap, or perform any operation that may affect this initiative.
      </div>
    </div>
  );
}
