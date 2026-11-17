import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {

        const productRef = doc(db, 'productos dietetica', id);

        getDoc(productRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    setProduct({ ...snapshot.data(), id: snapshot.id });
                } else {
                    setProduct(null);
                }
            })
            .catch(error => console.log("Error loading the product:", error))
            .finally(() => {
                setLoading(false);
            })

    }, [id]);

    if (!product) {
        return <h2>Loading product details...</h2>;
    }

    if (!product.id) {
        return <h2>Product not found.</h2>;
    }

    return (
        <div>
            <h2>Product details: {product.name}</h2>
            <img src={product.img} alt={product.name} />
            <h2>${product.price}</h2>
            <p>{product.description}</p>
        </div >
    );

};

export default ProductDetail;