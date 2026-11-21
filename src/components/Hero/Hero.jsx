import styles from "./Hero.module.css";
import Container from "../Container";
import { useState } from "react";

const Hero = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>Choose health</h1>
            <h3 className={styles.heroSubtitle}>
              Everything you need to take care of yourself, in one place.
            </h3>
            <p className={styles.heroDescription}>
              Seeds, nuts, supplements, flours, snacks, and more. Everything you
              need for a healthier, more natural lifestyle.
            </p>

            <div className={styles.heroButtons}>
              <a
                href="#"
                className={`${styles.button} ${styles.buttonViewCatalog}`}
              >
                View products
              </a>
              <a
                href="#"
                className={`${styles.button} ${styles.buttonContactUs}`}
              >
                Contact us
              </a>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            {isImageLoading && (
              <div className={styles.loaderContainer}>
                <div className={styles.loader}></div>
              </div>
            )}
            <img
              src="/yogur.png"
              alt="Banner"
              className={`${styles.heroImage} ${isImageLoading ? styles.hidden : styles.visible}`}
              onLoad={() => setIsImageLoading(false)}
              onError={() => setIsImageLoading(false)}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
