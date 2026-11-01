import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './CartView.module.css';

const CartView = () => {

    const { cart, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h2>The cart is empty.</h2>
                <Link to="/">Return to the catalog</Link>
            </div>
        );
    }




    return (
        <div className={styles.cartContainer}>
            <h2>Your purchase details</h2>

            <div className={styles.cartList}>
                {cart.map(item => (
                    <div key={item.id} className={styles.cartItem}>
                        <h3>{item.title}</h3>
                        <p>Qty: {item.quantity}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                    </div>
                ))}
            </div>

            <div className={styles.cartActions}>
                <h3>Order total: ${getCartTotal()}</h3>
                <button onClick={clearCart}>Clear cart</button>
                <button>Checkout</button>
            </div>

        </div>
    );


};

export default CartView;