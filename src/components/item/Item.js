import React  from 'react'
import classes from "./Item.module.scss";

const Item = (props) => {
  return (
      <figure className={classes.container} onClick={props.onClick} >
        <img src={props.image} />
        <figcaption><strong>{props.brand} {props.model}</strong> - {props.price}€</figcaption> 
      </figure>
  );
}

export default Item;
