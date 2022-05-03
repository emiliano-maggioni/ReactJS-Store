import React, { useContext, useState, useEffect } from 'react'
import TitleBar from 'components/titleBar/TitleBar';
import classes from "./ProductDetailsView.module.scss";
import { Context } from "contexts/Context";
import { getAPI } from 'utility/callsAPI';
import { createExpDate } from 'utility/utility';
import Storage from "Storage";
import { useParams } from "react-router-dom";
import { checkStorageItemExpired } from 'utility/storage';
import ProductDetailsBox from 'components/productDetailsBox/ProductDetailsBox';
import ProductDetailsOptions from 'components/productDetailsOptions/ProductDetailsOptions';

const ProductDetailsView = () => {
  const defcontext = useContext(Context);
  let { id } = useParams();
  const [prodData, setProdData] = useState();

  const getProductDetails = async () => {
    let url = `/api/product/${id}`;
    let storedAPI = checkStorageItemExpired(url);
    if (storedAPI.expired) {
      //IF DATA IN STORAGE ARE OLD WE UPDATE THEM ACHIEVING THEM FROM A REQUEST
      const data = await getAPI(url);
      defcontext.updateApiCache(url, data, createExpDate());
      setProdData(data);
    }
    else {
      //IF DATA IN STORAGE ARE NOT EXPIRED WE PASS THEM TO CONTEXT
      defcontext.updateApiCache(url, storedAPI.data, new Date(storedAPI.expirationDate));
      setProdData(storedAPI.data);
    }
  }

  useEffect(() => {
    getProductDetails();
  }, []);
  
  return (
    <section className={classes.container} >
      <TitleBar title="Product Details" btText="Back" btPath="/" />
      {(prodData) ? (
        <div className={classes.boxesContainer}>
          <figure className={classes.imageContainer} >
            <img src={prodData.imgUrl} />
          </figure>
          <div>
            <ProductDetailsBox prodData={prodData} />
            <ProductDetailsOptions prodData={prodData} />
          </div>
        </div>


      )
        : (<p>Waiting for datas...</p>)
      }


    </section>
  );
}

export default ProductDetailsView;
