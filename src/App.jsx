import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ContactDirectory from "./components/ContactDirectory/ContactDirectory";
import ProductDetail from "./components/ItemList/ProductDetail";
import CartView from "./components/Cart/CartView";
import Management from "./components/Management/Management";
import LoginContainer from "./components/Login/LoginContainer";
import RegisterContainer from "./components/Register/RegisterContainer";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/productos dietetica/:id" element={<ProductDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<ItemListContainer />} />
        <Route path="/contact" element={<ContactDirectory />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart-view" element={<CartView />} />
        <Route path="/management" element={<Management />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
