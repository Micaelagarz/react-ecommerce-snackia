import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/data/products.json')
            .then(response => response.json())
            .then(data => {
                const productFound = data.find(item => item.id === parseInt(id));
                setProduct(productFound);
            })
            .catch(error => console.log("Error al cargar el producto:", error));

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