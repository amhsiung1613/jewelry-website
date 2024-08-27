import React, { useState} from "react";
import productList from "../../../inventory/ProductList";
import Product from "../Products/Products";
import "./Shop.css";
import Navigation from "../../../product-page/Navigation/Nav";
import Recommended from "../../../product-page/Recommended/Recomended";
import Sidebar from "../../../product-page/SideBar/Sidebar";

const Shop = () => {
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // // ----------- Input Filter -----------
  // const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const filteredItems = productList.filter(
  //   (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  // // ----------- Radio Filtering -----------
  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // // ------------ Button Filtering -----------
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // function filteredData(productList, selected, query) {
  //   let filteredProducts = productList;

  //   // Filtering Input Items
  //   if (query) {
  //     filteredProducts = filteredItems;
  //   }

  //   // Applying selected filter
  //   if (selected) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ category, material, price, name }) =>
  //         category === selected ||
  //         material === selected ||
  //         price === selected ||
  //         name === selected
  //     );
  //   }

  //   return filteredProducts.map(
  //     ({ id, image, name, price }) => (
  //       <Product
  //         // key={Math.random()}
  //         id={id}
  //         image={image}
  //         name={name}
  //         // star={star}
  //         // reviews={reviews}
  //         price={price}
  //       />
  //     )
  //   );
  // }

  // const result = filteredData(productList, selectedCategory, query);  
  
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>All Jewelry</h2>
      </div>

      <div className="products">
        {productList.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    // <>
    //   <Sidebar handleChange={handleChange} />
    //   <Navigation query={query} handleInputChange={handleInputChange} />
    //   <Recommended handleClick={handleClick} />
    //   <Product result={result} />
    // </>
  );
};

export default Shop;