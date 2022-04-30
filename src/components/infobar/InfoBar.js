import Cart from 'components/cart/Cart';
import React  from 'react'
import classes from "./InfoBar.module.scss";
import { useLocation, useParams } from 'react-router-dom';

const InfoBar = (props) => {

  const getRoutePath = (location, params) => {
    const { pathname } = location;
  
    if (!Object.keys(params).length) {
      return pathname; // we don't need to replace anything
    }
  
    let path = pathname;
    Object.entries(params).forEach(([paramName, paramValue]) => {
      if (paramValue) {
        path = path.replace(paramValue, `:${paramName}`);
      }
    });
    return path;
  };
  
  
  const location = useLocation();
  const params = useParams();
  const path = getRoutePath(location, params);

  return (
    <div className={classes.container} >    
            <div  className={classes.breacrumbs} > 
            {path}           
            </div>
            <Cart /> 
    </div>
  );
}

export default InfoBar;
