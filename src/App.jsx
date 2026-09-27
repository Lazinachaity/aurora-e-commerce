import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/home.jsx"
import Shop from "./pages/Shop/Shop.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App