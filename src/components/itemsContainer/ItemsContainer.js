import Item from 'components/item/Item';
import React  from 'react'
import classes from "./ItemsContainer.module.scss";

const ItemsContainer = (props) => {
  let image = "https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg";
  let brand = "Iphone";
  let model = "SE 2020";
  let price = "499€";
  return (
    <div className={classes.container} >
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />

      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />

      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />
      <Item image={image} brand={brand} model={model} price={price} />

     </div>
  );
}

export default ItemsContainer;
