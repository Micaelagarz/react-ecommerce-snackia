import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import FavoritesSection from '../FavoritesSection/FavoritesSection';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import Container from '../Container';
import { useCart } from '../../context/CartContext';

const Nav = () => {

    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();

    return (
        <Container>
            <nav className={`container ${styles.headerBottom}`}>

                <FavoritesSection />
                {/*central navigation menu*/}
                {/*<button className={styles.menuOpenButton}>
                <FontAwesomeIcon icon={faBars} />
            </button>*/}
                <ul className={styles.navHeader}>
                    <CategoriesMenu />
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/offers">Offers</Link>
                    </li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li><Link to="/about-us">About us</Link>
                    </li>
                    <li><Link to="/add-product">Add product</Link>
                    </li>
                </ul>

            </nav >
        </Container>

    );
}

export default Nav;