// import React from 'react'

// const ShoppingCart = ({ cartItems }) => {
//   return (
//     <div>
//         <div className="cart-items">
//             <div className="cart-items-header">Cart Items</div>
//             {cartItems.length ===0 && (
//                 <div className="cart-items-empty">No items in cart. </div>
//             )}
//         </div>
//         <div>
//             {cartItems.map((item) => (
//                 <div key={item.id} className="cart-item-list">

//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default ShoppingCart

import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import productList from "../../../inventory/ProductList";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./Cart.css";
const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h2>Your Cart Items</h2>
      </div>
      <div className="cart">
        {productList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h2> Your Shopping Cart is Empty</h2>
      )}
    </div>
  );
};

export default Cart;