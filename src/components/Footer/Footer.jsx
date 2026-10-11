import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Container from '../Container';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer>
            <Container>
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
                </div>
            </Container>
        </footer>
    );
}

export default Footer;