import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">Redux</div>

        <div className="nav-items">
          <ul className="nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>{" "}
            </li>
          </ul>

          <div className="btn">
            <Cart />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
