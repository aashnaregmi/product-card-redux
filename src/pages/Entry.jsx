import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./Rootlayout";
import Home from "./Home";
import Products from "./Products";
import About from "./About";

const Entry = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="product" element={<Products />} />
      </Route>,
    ),
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Entry;
