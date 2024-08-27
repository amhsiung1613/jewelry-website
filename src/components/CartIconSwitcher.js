import React, { useState, useContext } from 'react';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { ShopContext } from '../context/shop-context';

function IconSwitcher() {
  const [icon, setIcon] = useState('full');
  // const { id } = props.data
  // const {addToCart, cartItems } = useContext(ShopContext)
  // const cartItemCount = cartItems[id];

  const toggleIcon = () => {
    setIcon(prevIcon => (prevIcon === 'full' ? 'half' : 'full'));
    
  };

  console.log("added to cart")

  return (
    <IconButton onClick={toggleIcon}>
      {icon === 'full' ? <AddShoppingCartIcon /> : <ShoppingCartIcon />}
    </IconButton>
  );
}

export default IconSwitcher
