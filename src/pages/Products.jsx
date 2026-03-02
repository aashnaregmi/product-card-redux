import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/features/CartSlice";
const Products = () => {
  const product = {
    id: 1,
    title: "Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and 20 hours battery life.",
    price: 79.99,
  };
  const dispatch = useDispatch();

  return (
    <div className="product-page">
      <div className="product-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button
            className="add-cart-btn"
            onClick={() => dispatch(increment())}
          >
            Add to Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() => dispatch(decrement())}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
