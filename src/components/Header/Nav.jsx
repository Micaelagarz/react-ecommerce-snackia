import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import Container from "../Container";

const Nav = () => {
  return (
    <Container>
      <nav className={`container ${styles.headerBottom}`}>
        {/*central navigation menu*/}
        {/*<button className={styles.menuOpenButton}>
                <FontAwesomeIcon icon={faBars} />
            </button>*/}
        <ul className={styles.navHeader}>
          <CategoriesMenu />
          <li>
            <Link to="/"
            className={styles.itemNav}>Home</Link>
          </li>
          <li>
            <Link to="/offers"
            className={styles.itemNav}>Offers</Link>
          </li>
          <li>
            <Link to="/reviews"
            className={styles.itemNav}>Reviews</Link>
          </li>
          <li>
            <Link to="/contact"
            className={styles.itemNav}>Contact us</Link>
          </li>
          <li>
            <Link to="/about-us"
            className={styles.itemNav}>About us</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
