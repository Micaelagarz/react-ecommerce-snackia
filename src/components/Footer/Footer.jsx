import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer>
            <div className={styles.footerTop}>
                <a href="#" className={styles.footerLeft}>
                    <FontAwesomeIcon icon={faSeedling} className={styles.logoIconFooter} />
                    <h2>Snackia</h2>
                </a>
                <nav className={styles.socials}>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                </nav>
            </div>
            <div className={styles.footerBottom}>
                <div>
                    <h4>About us</h4>
                    <ul>
                        <li><a href="">About us</a></li>
                        <li><a href="">Our mission</a></li>
                        <li><a href="">Quality & natural products</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Services</h4>
                    <ul>
                        <li><a href="">Nationwide shipping</a></li>
                        <li><a href="">Online shopping</a></li>
                        <li><a href="">Personalized service</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Help</h4>
                    <ul>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Returns & exchanges policy</a></li>
                        <li><a href="">Payment methods</a></li>
                    </ul>
                </div>
                <div className={styles.teamSection}>
                    <h4>Nuestro Equipo</h4>
                    <div className={styles.cardsContainer}>
                        <div className={styles.personCard}>
                            <b>Lucía Gómez</b>
                            <p>Fundadora</p>
                        </div>
                        <div className={styles.personCard}>
                            <b>Carlos Pérez</b>
                            <p>Logística</p>
                        </div>
                        <div className={styles.personCard}>
                            <b>Ana Martínez</b>
                            <p>Soporte</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;