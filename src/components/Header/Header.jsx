import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar';
import CartBox from '../CartBox/CartBox';
import UserMenu from '../UserMenu/UserMenu';
import Nav from './Nav';
import Container from '../Container';

function Header() {
    return (
        <header>
            <Container>
                <div className={styles.headerTop}>
                    <a href="#" className={styles.logo}>
                        <FontAwesomeIcon icon={faSeedling} />
                        <h2 className={styles.logoText}>Snackia</h2>
                    </a>

                    <SearchBar />

                    <div className={styles.userActions}>
                        <UserMenu />
                        <CartBox />
                    </div>

                    <Nav />

                </div>

                {/*<div className={styles.shippinAddressHeader}>
                    <div className={styles.locationIcon}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.locationDot} />
                    </div>
                    <div className={styles.locationInfo}>
                        <p>Enviar a García</p>
                        <p>Calle Indenpendencia 30</p>
                    </div>
                </div>*/}
            </Container>
        </header>

    );
}

export default Header;