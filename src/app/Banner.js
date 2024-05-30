// src/app/Banner.js
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src="/nacho_banner.jpg" alt="Banner" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;