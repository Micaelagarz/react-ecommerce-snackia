import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <h1>Choose health</h1>
                    <h3 className={styles.heroSubtitle}>Everything you need to take care of yourself, in one place.</h3>
                    <p className={styles.heroDescription}>Seeds, nuts, supplements, flours, snacks, and more. Everything you need for a healthier, more natural lifestyle.</p>

                    <div className={styles.heroButtons}>
                        <a href="#" className={`${styles.button} ${styles.buttonViewCatalog}`}>View products</a>
                        <a href="#" className={`${styles.button} ${styles.buttonContactUs}`}>Contact us</a>
                    </div>
                </div>
                <div className={styles.heroImageWrapper}>
                    <img src="/yogur.png" alt="Banner" className={styles.heroImage} />
                </div>
            </div>
        </section>
    );

}

export default Hero;