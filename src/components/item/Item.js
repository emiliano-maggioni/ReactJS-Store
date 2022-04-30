import React  from 'react'
import classes from "./Item.module.scss";

const Item = (props) => {
  return (
      <figure className={classes.container} >
        <img src={props.image} />
        <figcaption><strong>{props.brand} {props.model}</strong> - {props.price}</figcaption> 
      </figure>
  );
}

export default Item;
