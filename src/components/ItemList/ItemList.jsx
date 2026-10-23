import Item from "./Item";
import styles from "./ItemList.module.css";
import Container from "../Container";
import { useCart } from '../../context/CartContext';

const ItemList = ({ products }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (selectedProduct, quantity) => {
        addToCart(selectedProduct, quantity);
        alert(`Agregaste ${quantity} unidades de ${selectedProduct.title}`);
    }

    return (
        //This div handles the grid.

        <Container>
            <div className={styles.catalogGrid}>

                {products
                    .filter(product => product.stock > 0)
                    .map(product => (
                        <Item
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))
                }


            </div>
        </Container>


    );
}

export default ItemList;