import style from "./FavoriteButton.module.css"
import { useState } from "react";

const FavoriteButton = () => {

    const [isFav, setIsFav] = useState(false);

    const markAsFavorite = () => {
        setIsFav(!isFav);
    }

    return (
        <div className={style.buttonFav}>
            <button className={style.buttonFav} onClick={markAsFavorite}>
                {isFav ? '⭐' : '☆'}
            </button>
        </div>

    );
}

export default FavoriteButton;