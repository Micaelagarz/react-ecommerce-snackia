import ItemList from "./ItemList";
import Container from "../Container";
import { useState, useEffect } from "react";
import PageHeader from "../PageHeader/PageHeader";

const ItemListContainer = () => {

    // 1. Status for storing the products and another to indicate if it is loading.
    const [products, setProducts] = useState([]);

    // 2. if the products are loading, the loading state is set to true, and a loading mesagge or spinner is displayed.
    // 3. Once loading is finished, the loading state is set to false, and the products are displayed.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 4. Use effect for load the products
    useEffect(() => {

        fetch('/data/products.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('The products could not be loaded.');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    //5. While the fetch does its job, we display something temporary. 
    if (loading) {
        return <h2>Loading the Snackia catalog...</h2>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    //6. Once we have the data, we map it out and delegate to the exhibitor.
    return (
        <div>

            <Container>
                <PageHeader title="Offers" />
            </Container>

            {/* 7. It passes the entire array to the organizer. */}
            <ItemList products={products} />

        </div>
    );
}

export default ItemListContainer;