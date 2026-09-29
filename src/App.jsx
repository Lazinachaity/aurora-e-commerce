import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/home.jsx"
import Shop from "./pages/Shop/Shop.jsx"
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx"
import CartProvider from "./context/CartContext.jsx"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App