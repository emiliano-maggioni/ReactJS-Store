import React, { useContext } from 'react'
import classes from "./Cart.module.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Context } from "contexts/Context"; 

const Cart = (props) => {
  const defcontext = useContext(Context);

  return (
    <div className={classes.container} >  
      CART {defcontext.cart}
      <ShoppingCartOutlinedIcon />
      {defcontext.apiCachedData.cachedDate} - 
      {defcontext.apiCachedData.data}
    </div>
  );
}

export default Cart;
