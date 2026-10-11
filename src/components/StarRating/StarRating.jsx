import styles from "./StarRating.module.css";

const StarRating = ({ rating, reviewCount }) => {
    const totalStars = Array(5).fill(0);

    return (
        <div className={styles.starsContainer}>
            {totalStars.map((_, index) => (
                <span
                    key={index}
                    className={styles.star}
                >
                    {index < rating ? '★' : '☆'}
                </span>

            ))}

            <span className={styles.countText}>({reviewCount})</span>
        </div>
    );
};

export default StarRating;