import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AddToCart from './pages/AddToCart';
import ProductDetails from './components/ProductDetails';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails/>} />

        <Route path="cart" element={<AddToCart/>} />
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;