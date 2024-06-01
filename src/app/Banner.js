// src/app/Banner.js
import styles from './Banner.module.css';
import Image from 'next/image'; // changing img by Image
import Link from 'next/link'; // Import Link


const Banner = () => {
  return (
    <div className={styles.BannerContainer}>
      <div className={styles.bannerText}>
        <Image src="/kaspa_logo_nacho.png" alt="Nacho the 𐤊at Logo" width={150} height={150} className={styles.logo} />
        <h1 className={styles.title}>
          Nacho the 𐤊at
        </h1>  
        <p>
          <span className={styles.highlight}>Join our community</span>, in making <span className={styles.highlight}>Nacho the 𐤊at</span> the perfect example of fairness and the true spirit of <span className={styles.highlight}>Kaspa and KRC20!</span>
        </p>    
    </div>
  </div>
  );
};

export default Banner;
