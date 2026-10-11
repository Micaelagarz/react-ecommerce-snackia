import Item from "./Item";
import styles from "./ItemList.module.css";
import Container from "../Container";
import Section from "../Section/Section";

const ItemList = ({ products }) => {
    return (
        //This div handles the grid.
        <Section>
            <Container>
                <div className={styles.catalogGrid}>

                    {products
                        .filter(product => product.stock > 0)
                        .map(product => (
                            <Item key={product.id} product={product} />
                        ))
                    }


                </div>
            </Container>
        </Section>

    );
}

export default ItemList;