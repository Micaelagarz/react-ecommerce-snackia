import style from "./FavoriteButton.module.css"
import { useState } from "react";

const FavoriteButton = () => {

    const [isFav, setIsFav] = useState(false);

    const markAsFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFav(!isFav);
    }

    return (
        <div className={style.buttonFav}>
            <button type="button" className={style.buttonFav} onClick={markAsFavorite}>
                {isFav ? '⭐' : '☆'}
            </button>
        </div>

    );
}

export default FavoriteButton;