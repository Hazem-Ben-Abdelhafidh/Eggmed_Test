import { Route, Routes } from "react-router-dom"
import EditProduct from "./Components/EditProduct"
import Home from "./Components/Home"
import Layout from "./Components/Layout"
import NewProduct from "./Components/NewProduct"
import ProductDetails from "./Components/ProductDetails"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Route>
    </Routes>
  )
}

export default App
