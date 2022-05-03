import Cart from 'components/cart/Cart';
import React  from 'react'
import classes from "./InfoBar.module.scss";
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const InfoBar = (props) => {
    
  const getRoutePath = (location, params) => {

    const { pathname } = location;
    let path = "";
    let pathObj = {};
  
    if (!Object.keys(params).length) {
      path = pathname;
    }
    else{
        path = pathname;
        Object.entries(params).forEach(([paramName, paramValue]) => {
          if (paramValue) {
            path = path.replace(paramValue, `:${paramName}`);
          }
        });  
    }
    
    if(path.indexOf("/")>=0){ 
      let pos = path.indexOf("/")+1;
      pathObj.first = path.substring(0,pos);
      pathObj.last = path.substring(pos,path.length);
      return pathObj;
    }
    else{
      pathObj.last = path;
      return pathObj;
    }

  };
  
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const path = getRoutePath(location, params);


  


  return (
    <div className={classes.container} >    
            <div  className={classes.breadcrumbs} > 
              {(path?.first) && <span  onClick={() => navigate(path.first)}>{path.first}</span>}{path?.last}                       
            </div>
            <Cart /> 
    </div>
  );
}

export default InfoBar;
