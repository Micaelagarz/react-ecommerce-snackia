import style from "./Item.module.css";
import StarRating from "../StarRating/StarRating";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export function Item({ product }) {
    return (
        <article className={style.itemContainer}>
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
            <div className={style.buttonContainer}>
                <button>Add to cart</button>
            </div>


        </article>
    );
}

export default Item;