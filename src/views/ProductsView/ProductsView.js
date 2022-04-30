import ItemsContainer from 'components/itemsContainer/ItemsContainer';
import SearchBar from 'components/searchbar/SearchBar';
import React from 'react'
import classes from "./ProductsView.module.scss";

const ProductsView = () => {
  
  return (
    <section className={classes.container} >  
          <SearchBar />
          <ItemsContainer />
     </section>
  );
}

export default ProductsView;
