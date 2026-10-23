import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemList/ItemListContainer';
import ContactDirectory from './components/ContactDirectory/ContactDirectory';
import FormContainer from './components/ProductForm/FormContainer';
import ProductDetail from './components/ItemList/ProductDetail';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<ItemListContainer />} />
        <Route path="/contact" element={<ContactDirectory />} />
        <Route path="/add-product" element={<FormContainer />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>

  );
}

export default App;
