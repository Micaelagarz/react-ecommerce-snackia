import style from "./Item.module.css";
import StarRating from "../StarRating/StarRating";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Link } from 'react-router-dom';

export function Item({ product, onAddToCart }) {
    return (
        <article className={style.itemContainer}>
            <Link to={`/product/${product.id}`} className={style.linkDetail}>
                <div className={style.imgItemContainer}>
                    <FavoriteButton />
                    <img className={style.imgItem} src={product.thumbnail} alt={product.title} />
                </div>

                <div className={style.contentItemContainer}>
                    <h3>{product.title}</h3>

                    <div className={style.infoContainer}>
                        <p>${product.price}</p>
                        <StarRating rating={product.rating} reviewCount={product.reviews.length} />
                    </div>
                </div>
            </Link>
            <button
                type="button"
                className={style.buttonContainer}
                onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product, 1);
                }}
            >
                Add to cart
            </button>
        </article>
    );
}

export default Item;