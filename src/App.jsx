import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import CartPage from './components/CartPage'
import CategoryPage from './components/CategoryPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Routes>
  )
}

export default App