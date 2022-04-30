import Item from 'components/item/Item';
import React  from 'react'
import classes from "./ItemsContainer.module.scss";

const ItemsContainer = (props) => {
  let image = "https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg";
  let title = "Iphone SE 2020";
  return (
    <div className={classes.container} >
      <Item image={image} title={title} />
      <Item image={image} title={title} />
      <Item image={image} title={title} />
      <Item image={image} title={title} />

      <Item image={image} title={title} />
      <Item image={image} title={title} />
      <Item image={image} title={title} />
      <Item image={image} title={title} />

      <Item image={image} title={title} />
      <Item image={image} title={title} />
      <Item image={image} title={title} />
      <Item image={image} title={title} />
      
      <Item image={image} title={title} />
      <Item image={image} title={title} />
      <Item image={image} title={title} />
      <Item image={image} title={title} />

     </div>
  );
}

export default ItemsContainer;
