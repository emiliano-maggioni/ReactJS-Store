import React, {useContext, useEffect} from 'react'
import TitleBar from 'components/titleBar/TitleBar';
import classes from "./ProductDetailsView.module.scss";
import { Context } from "contexts/Context"; 
import { getAPI } from 'utility/callsAPI';
import { createExpDate } from 'utility/utility';

const ProductDetailsView = () => {  
  const defcontext = useContext(Context);

  const getProductDetails = async () => {
    const data = await getAPI("/api/product/ZmGrkLRPXOTpxsU4jjAcv"); 
    defcontext.updateApiCache("/api/product/ZmGrkLRPXOTpxsU4jjAcv",data,createExpDate());
  } 
  
  useEffect(()=>{
    getProductDetails();
  },[]);
  
  return (
     <section className={classes.container} >  
         <TitleBar title="Product Details"  btText="Back" btPath="/"  />
     </section>
  );
}

export default ProductDetailsView;
