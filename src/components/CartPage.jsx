import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import '../styles/CartPage.css';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <p>Your cart is empty</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-page-content">
          <div className="cart-items-list">
            {cart.map(item => (
              <div key={item.id} className="cart-page-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total: ${getTotalPrice().toFixed(2)}</p>
            <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;