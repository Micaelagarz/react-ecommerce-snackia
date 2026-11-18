import style from "./FavoriteButton.module.css";
import { useFavorites } from "../../context/FavoritesContext";

const FavoriteButton = ({ product }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(product.id);

  const markAsFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <div className={style.buttonFav}>
      <button type="button" onClick={markAsFavorite}>
        {isFav ? "⭐" : "☆"}
      </button>
    </div>
  );
};

export default FavoriteButton;
