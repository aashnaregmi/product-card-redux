import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // awesome cart icon
import { useSelector } from "react-redux";

const Cart = () => {
  const selector = useSelector((state) => state.cart.value);
  return (
    <div
      style={{
        position: "relative",
        padding: "5px",
        right: "0px",
      }}
    >
      <div
        style={{
          fontSize: "26px",
          color: "#00ffff",
        }}
      >
        <FaShoppingCart />
      </div>

      <span
        style={{
          position: "absolute",
          color: "orange",

          right: "10px",
          top: "-7px",
        }}
        className="cart-span"
      >
        {selector}
      </span>
    </div>
  );
};

export default Cart;
