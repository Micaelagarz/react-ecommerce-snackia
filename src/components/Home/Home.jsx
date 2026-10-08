import styles from './Home.module.css';
import Hero from '../Hero/Hero';
const Home = () => {

    return (
        <div className={styles.homeContainer}>
            <Hero />
            <section className={styles.offersSection}>
                <div className={styles.offersGrid}>

                </div>
            </section>
        </div>
    );
}

export default Home;