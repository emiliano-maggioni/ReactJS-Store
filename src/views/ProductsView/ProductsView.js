import React, {useContext, useState, useEffect} from 'react'
import ItemsContainer from 'components/itemsContainer/ItemsContainer';
import SearchBar from 'components/searchbar/SearchBar';
import TitleBar from 'components/titleBar/TitleBar';
import classes from "./ProductsView.module.scss";
import { Context } from "contexts/Context"; 
import { getAPI } from 'utility/callsAPI';
import { createExpDate } from 'utility/utility';
import { checkStorageItemExpired } from 'utility/storage';

const ProductsView = () => {
  const defcontext = useContext(Context); 
  const [list, setList] = useState([]);
    
  const getProductsList = async () => {
    let storedAPI = checkStorageItemExpired("/api/product");
    if(storedAPI.expired){
      //IF DATA IN STORAGE ARE OLD WE UPDATE THEM ACHIEVING THEM FROM A REQUEST
      const data = await getAPI("/api/product"); 
      defcontext.updateApiCache("/api/product",data,createExpDate());
      setList(data);
    }
    else{
      //IF DATA IN STORAGE ARE NOT EXPIRED WE PASS THEM TO CONTEXT
      defcontext.updateApiCache("/api/product",storedAPI.data,new Date(storedAPI.expirationDate));
      setList(storedAPI.data);
    }
  } 

  useEffect(()=>{
    getProductsList();    
  },[]); 
  
  
  return (
    <section className={classes.container} >
          <TitleBar title="Product List Page" />
          <SearchBar />
          <ItemsContainer list={(defcontext.searchString) ? list.filter((el) => (el.brand.toLowerCase() == defcontext.searchString) ||  (el.model.toLowerCase() == defcontext.searchString) ) : list } />
     </section>
  );
}

export default ProductsView;
