import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import FavIconSwitcher from "../../../components/FavIconSwitcher";
import CartIconSwitcher from "../../../components/CartIconSwitcher";
import "./Products.css";

const Product = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        {/* <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p> */}
        <h3 className="card-title">{name}</h3>
        <section className="card-price">
            <div className="price">
              ${price}
            </div>
            <div className="bag">
              <FavIconSwitcher />
              {/* <CartIconSwitcher onClick={() => addToCart(id)} /> */}
            </div>
          </section>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export default Product;