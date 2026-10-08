import styles from './ProductCard.module.css';

const ProductCard = ({ img, name, price }) => {
    return (
        <article className={styles.productCardSection}>

            <div className={styles.imgCardContainer}>
                <img src={img} alt={name} />
            </div>

            <div className={styles.contentCardContainer}>
                <h3>{name}</h3>
                <span>{price}</span>
                <span>
                    <p>Add to cart</p>
                </span>
            </div>
        </article>
    );
}
{/* <div className={styles.cardProduct}>
            <div className={styles.containerImg}>
                <img src={image || 'img/default.png'} alt={nombre} />
                <span className={styles.discount}>-13%</span>

            </div>

            <div className={styles.contentCardProduct}>
                <div className={styles.stars}>
                    <FontAwesomeIcon icon={faStarSolid}/>
                    <FontAwesomeIcon icon={faStarSolid}/>
                    <FontAwesomeIcon icon={faStarSolid}/>
                    <FontAwesomeIcon icon={faStarSolid}/>
                    <FontAwesomeIcon icon={faStarRegular}/>
                </div>

                <h3>{name}</h3>

                <p className={styles.price}>
                    ${price} 
                </p>

                <button
                    type="button"
                    className={styles.addCart}
                    onClick={() => addToCart(id)}>
                    Add
                </button>
            </div>
        </div>
         */}


export default ProductCard;