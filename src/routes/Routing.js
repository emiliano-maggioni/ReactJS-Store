import React, { useRef, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import ProductsView from "views/ProductsView/ProductsView";
import ProductDetailsView from "views/ProductDetailsView/ProductDetailsView";

const Routing = () => {

  return (
      <Routes>
        <Route path='/details' element={<ProductDetailsView />} />  
        <Route path='/' element={<ProductsView />} />      
      </Routes>
  );
}

export default Routing;
