import { useFavorites } from "../../context/FavoritesContext";
import { useCart } from "../../context/CartContext"; // O el nombre de tu hook del carrito
import Item from "../ItemList/Item";

const Favorites = () => {
  const { favorites } = useFavorites();
  const { addToCart } = useCart();

  return (
    <section>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>You don't have favorite products yet.</p>
      ) : (
        <div>
          {favorites.map((product) => (
            <Item key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Favorites;
