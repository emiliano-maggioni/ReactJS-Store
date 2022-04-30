import React  from 'react'
import classes from "./Cart.module.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Cart = (props) => {
  
  return (
    <div className={classes.container} >  
      CART
      <ShoppingCartOutlinedIcon />

    </div>
  );
}

export default Cart;
