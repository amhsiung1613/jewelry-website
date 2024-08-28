// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useContext } from "react";
import FavIconSwitcher from "../../../components/FavIconSwitcher"
import CartIconSwitcher from "../../../components/CartIconSwitcher"
import "./Card.css"
// import { ShopContext } from "../../../context/shop-context";

const Card = ({ id, image, name, price }) => {
  // const { addToCart, cartItems } = useContext(ShopContext);
  // const cartItemCount = cartItems[id];
  
  return (
    <>
      <section className="card">
        <img src={image} alt={name} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{name}</h3>
          <section className="card-price">
            <div className="price">
              ${price}
            </div>
            <div className="bag">
              <FavIconSwitcher productId={id}/>
              <CartIconSwitcher productId={id}/>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;