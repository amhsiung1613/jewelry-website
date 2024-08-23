import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function IconSwitcher() {
  const [icon, setIcon] = useState('full');

  const toggleIcon = () => {
    setIcon(prevIcon => (prevIcon === 'full' ? 'half' : 'full'));
  };

  return (
    <IconButton onClick={toggleIcon}>
      {icon === 'full' ? <FavoriteBorderIcon /> : <FavoriteIcon />}
    </IconButton>
  );
}

export default IconSwitcher
