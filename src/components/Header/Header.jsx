import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import CartWidget from "../Cart/CartWidget";
import UserMenu from "../UserMenu/UserMenu";
import Nav from "./Nav";
import Container from "../Container";

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
            <CartWidget />
          </div>

          <Nav />
        </div>
      </Container>
    </header>
  );
}

export default Header;
