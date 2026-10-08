import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/productos.json')
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.log("Hubo un error con el fetch", error));
    }, []);

    return (
        <div className="catalogoContainer">
            {
                productos.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        name={producto.title}
                        price={producto.price}
                        img={producto.thumbnail}
                    />
                ))
            }

        </div>
    );


}

export default ItemListContainer;