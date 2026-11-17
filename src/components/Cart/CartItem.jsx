import { useCart } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './CartItem.module.css';

// the variant can be "panel" or "full view" 

const CartItem = ({ item, variant = 'panel' }) => {
    const { updateQuantity, removeFromCart } = useCart();

    // we determine which class to apply dynamically based on the variant
    const variantClass = styles[variant];

    return (
        <div className={`${styles.itemBase} ${variantClass}`}>


            <img src={item.thumbnail} alt={item.title} />


            <div className={styles.content}>

                <div className={styles.topRow}>
                    <span className={styles.cartItemTitle}> {item.title}</span>
                    <button
                        className={styles.removeButton}
                        onClick={() => removeFromCart(item.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>



                <div className={styles.bottomRow}>
                    <span className={styles.cartItemPrice}> ${item.price} </span>
                    <div className={styles.quantityControls}>

                        <button onClick={() => updateQuantity(item.id, -1)}>
                            <FontAwesomeIcon className={styles.controlButtons} icon={faMinus} />
                        </button>

                        <span className={styles.quantityNumber}>{item.quantity}</span>

                        <button onClick={() => updateQuantity(item.id, 1)}>
                            <FontAwesomeIcon className={styles.controlButtons} icon={faPlus} />
                        </button>

                    </div>
                </div>

            </div>


        </div>

    )
}

export default CartItem;