import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './Cart.module.css'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Cart = () => {

    const [cartCount, setCartCount] = useState(0);
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();
    return (
        <Link to="/cart" className={styles.navIconBasket}>
            <FontAwesomeIcon icon={faBasketShopping} {...totalItems > 0 && <span>{totalItems}</span>} />
        </Link>
    );
}

export default Cart;