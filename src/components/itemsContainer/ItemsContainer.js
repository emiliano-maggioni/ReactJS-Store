import React  from 'react'
import Item from 'components/item/Item';
import classes from "./ItemsContainer.module.scss";
import { useNavigate } from 'react-router-dom';

const ItemsContainer = (props) => {
  const navigate = useNavigate();
  
  return (
    <div className={classes.container} >
      { (props.list?.length) ? props.list.map((el)=> <Item key={el.id} image={el.imgUrl} brand={el.brand} model={el.model}  onClick={ ()=>  navigate(`/details/${el.id}`)}   />) 
       : (<p>No products found</p>)     }
     </div>
  );
}

export default ItemsContainer;
