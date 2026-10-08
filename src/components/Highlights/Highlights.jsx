import { useState } from "react";
import { PRODUCTS_MOCK } from "../../data/products";
import {ProductCard } from '../ProductCard/ProductCard';

const Highlights = () => {
    const [buttonHighlight, setButtonHighlight] = useState("topSellers");

    return (
        <section>
            <h2> Highlights </h2>
            <div className={style.optionsContainer}>
                <button></button>
            </div>  
        </section>    
    );

}