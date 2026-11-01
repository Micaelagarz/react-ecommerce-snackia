import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './CartWidget.module.css'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartPanel from './CartPanel';

const CartWidget = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();



    console.log(totalItems);
    return (
        <div className={styles.widgetContainer}>

            <button className={styles.navIconBasket} onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBasketShopping} />
                {totalItems > 0 && <span className={styles.totalItems}>{totalItems}</span>}
            </button>

            <div
                //control of the overlay display
                className={`${styles.overlay} 
                ${isOpen
                        ? styles.show
                        : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {/*control of the panel display*/}
            <CartPanel isOpen={isOpen} closePanel={() => setIsOpen(false)} />
        </div>
    );

}

export default CartWidget;