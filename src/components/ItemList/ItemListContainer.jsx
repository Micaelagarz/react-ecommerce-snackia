import ItemList from "./ItemList";
import Container from "../Container";
import { useState, useEffect } from "react";
import PageHeader from "../PageHeader/PageHeader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import styles from "./ItemListContainer.module.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  // 1. Status for storing the products and another to indicate if it is loading.
  const [products, setProducts] = useState([]);

  // 2. if the products are loading, the loading state is set to true, and a loading mesagge or spinner is displayed.
  // 3. Once loading is finished, the loading state is set to false, and the products are displayed.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 4. Use effect for load the products
  useEffect(() => {
    setLoading(true);
    setError(null);

    const dbProducts = collection(db, "productos dietetica");

    const q = categoryId
      ? query(dbProducts, where("category", "==", categoryId))
      : dbProducts;

    getDocs(q)
      .then((response) => {
        if (response.empty) {
          throw new Error(
            "The products could not be loaded or the collection is empty.",
          );
        }

        setProducts(
          response.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          }),
        );
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);
  console.log("Datos de Firebase:", products);
  //5. While the fetch does its job, we display something temporary.
  if (loading) {
    return (
      <div className={styles.loadingProductsContainer}>
        <h2>Loading the Snackia catalog...</h2>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
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
};

export default ItemListContainer;
