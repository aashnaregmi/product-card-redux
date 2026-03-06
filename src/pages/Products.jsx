import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/CartSlice";
import { fetchedData } from "../redux/features/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
  const productsSelector = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchedData());
  }, [dispatch]);

  return (
    <div className="products">
      {productsSelector?.length > 0 &&
        productsSelector.map((product) => (
          <div className="product-card" key={product.id}>
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
        ))}
    </div>
  );
};

export default Products;
