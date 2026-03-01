import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // awesome cart icon

const Cart = () => {
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
        0
      </span>
    </div>
  );
};

export default Cart;
