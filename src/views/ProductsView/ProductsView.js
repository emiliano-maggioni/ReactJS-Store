import React, {useContext, useEffect} from 'react'
import ItemsContainer from 'components/itemsContainer/ItemsContainer';
import SearchBar from 'components/searchbar/SearchBar';
import TitleBar from 'components/titleBar/TitleBar';
import classes from "./ProductsView.module.scss";
import { Context } from "contexts/Context"; 
import { getAPI } from 'utility/callsAPI';
import { createExpDate } from 'utility/utility';

const ProductsView = () => {
  const defcontext = useContext(Context); 
    
  const getProductsList = async () => {
    const data = await getAPI("/api/product"); 
    console.log("DATI:",data); 
    defcontext.updateApiCache("/api/product",data,createExpDate());
  } 

  useEffect(()=>{
    getProductsList();
  },[]);
  
  return (
    <section className={classes.container}  >  
          <TitleBar title="Product List Page" />
          <SearchBar />
          <ItemsContainer />
     </section>
  );
}

export default ProductsView;
