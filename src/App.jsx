import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/home.jsx"
import Shop from "./pages/Shop/Shop.jsx"
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx"
import CartProvider from "./context/CartContext.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import Navbar from "./components/layout/Navbar.jsx"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App