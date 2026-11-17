import { db } from '../../firebase/config';
import ProductFormContainer from '../ProductForm/ProductFormContainer';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from 'react';


const Management = () => {

    const [products, setProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);

    const fetchProducts = async () => {
        const productsRef = collection(db, "productos dietetica");
        const res = await getDocs(productsRef);

        setProducts(
            res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        const confirmation = window.confirm("Are you sure yo want to delete this product?");

        if (confirmation) {
            const docRef = doc(db, "productos dietetica", id);
            await deleteDoc(docRef);

            setProducts(products.filter(prod => prod.id !== id));
            alert("Product removed");
        }
    }

    const handleEditClick = (product) => {
        setProductToEdit(product);
    }

    const cancelEditing = () => {
        setProductToEdit(null);
    };

    return (
        <div>
            <h2>Product Management</h2>
            <hr />
            <ProductFormContainer
                onProductAdded={fetchProducts}
                productToEdit={productToEdit} />
            <hr />
            <h3>List of products</h3>
            <ul>
                {products.map((prod) => (
                    <li key={prod.id}>
                        {prod.title} - ${prod.price}

                        <button onClick={() => handleDelete(prod.id)}>Remove</button>

                        <button onClick={() => handleEditClick(prod)}>
                            Edit
                        </button>

                        {productToEdit && productToEdit.id === prod.id && (
                            <button onClick={cancelEditing}>
                                Cancel editing
                            </button>
                        )}

                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Management;