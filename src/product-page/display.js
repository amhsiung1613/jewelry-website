import { useState } from "react";
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products1";
import products from "../inventory/ProductList";
import Recommended from "./Recommended/Recomended";
import Sidebar from "./SideBar/Sidebar";
import Card from "./Product-Components/Card/Card";
import "./index.css";

function Display() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, material, price, name }) =>
          category === selected ||
          material === selected ||
          price === selected ||
          name === selected
      );
    }

    return filteredProducts.map(
      ({ id, image, name, price }) => (
        <Card
          id={id}
          image={image}
          name={name}
          price={price}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);



  return (
    <>
      {/* <Router>
        <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
      </Router> */}
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Display;