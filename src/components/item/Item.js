import React  from 'react'
import classes from "./Item.module.scss";

const Item = (props) => {
  return (
    <div className={classes.container} >
         <figure className={classes.imgContainer} >
           <img src={props.image} />
           <figcaption>{props.title}</figcaption> 
         </figure> 
     </div>
  );
}

export default Item;
