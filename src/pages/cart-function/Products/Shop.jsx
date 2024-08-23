import React from "react";
import productList from "../../../inventory/ProductList";
import { Product } from "./Products";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>All Jewelry</h1>
      </div>

      <div className="products">
        {productList.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;