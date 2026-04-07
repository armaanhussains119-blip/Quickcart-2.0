import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import ProductList from './ProductList';

function CategoryPage({ products }) {
  const { addToCart } = useCart();
  // Get category from URL params
  const { category } = useParams();

  // Filter products by category
  const filteredProducts = products.filter(p => p.category === category);

  return (
    <div className="category-page">
      <h2 className="category-title">{category} Products</h2>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p>😕 No products found in this category</p>
          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <ProductList
          products={filteredProducts}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default CategoryPage;