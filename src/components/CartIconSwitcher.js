import React, { useState } from 'react';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { ShopContext } from '../context/shop-context';

function IconSwitcher() {
  const [icon, setIcon] = useState('full');

  const toggleIcon = () => {
    setIcon(prevIcon => (prevIcon === 'full' ? 'half' : 'full'));
  };

  return (
    <IconButton onClick={toggleIcon}>
      {icon === 'full' ? <AddShoppingCartIcon /> : <ShoppingCartIcon />}
    </IconButton>
  );
}

export default IconSwitcher
