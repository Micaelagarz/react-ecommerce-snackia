import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './CartPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';

const CartPanel = ({ closePanel, isOpen }) => {
    const { cart, getCartTotal } = useCart();

    return (
        <div className={`${styles.panelContainer} ${isOpen ? styles.open : ''}`}>

            <div className={styles.panelHeader}>
                <button onClick={closePanel}
                    className={styles.closeButton}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

            </div>


            {cart.length === 0
                ? (<div className={styles.emptyCartContainer}>
                    <p className={styles.emptyCartMessage}>Your cart is empty.</p>
                    <p className={styles.addProdMessage}>Add products to continue with your purchase</p>

                    <Link to="/offers" className={styles.viewProductsButton} onClick={closePanel}>
                        View Products
                    </Link>


                </div>
                )
                : (
                    <div className={styles.cartListContainer}>
                        <h3>Your products</h3>

                        <div className={styles.productList}>
                            {cart.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>



                        <div className={styles.panelFooter}>
                            <p>Total: ${getCartTotal(cart)}</p>

                            <Link className="buttonContainer"
                                to="/cart-view" onClick={closePanel}>
                                Proceed to checkout
                            </Link>


                        </div>
                    </div>

                )
            }

        </div>

    );
};

export default CartPanel;    