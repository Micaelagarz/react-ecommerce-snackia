import { Layout } from './components/Layout';
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<ItemListContainer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
