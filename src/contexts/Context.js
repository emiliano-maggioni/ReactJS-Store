import React, { useState, createContext } from 'react';
import { checkIfDataExpired } from "utility/utility";

export const Context = createContext({
    cart: [],
    apiCachedData: [],
    updateApiCache: (url,data,expDate) => {},
    searchString: "",
    setItemsFilter: (filter) => {},
    setCartData: (datas) => {},
});

export const ContextProvider = (props) => {
    const [cartData,setCart] = useState([]);
    const [searchString,setSearchString] = useState("");
    
    
    const [apiCachedData,setApiCachedData] = useState([]);      
    const setItemsFilter = (filter)=>{    setSearchString(filter);  }
    const setCartData = (datas) =>{ 
          let cartdata = [...cartData];
          cartdata = cartdata.filter((el) => el.id !== datas.id);       
          cartdata.push(datas);   
          setCart(cartdata);
    }

    const updateApiCache = (url,data,expDate) => {
        let res = apiCachedData.filter((el) => el.url == url);
        if(!res.length){
            let arrayAPI = [...apiCachedData];
            arrayAPI.push({url:url,data:data, expirationDate: expDate});
            setApiCachedData(arrayAPI);
            localStorage.setItem('apiCachedData',JSON.stringify(arrayAPI));
        }
        else{
            if(checkIfDataExpired(res[0]?.expirationDate)){
                let arrayAPI = [...apiCachedData];
                arrayAPI.forEach((el)=>{
                    if(el.url == url){
                        el.data = data;
                        el.expirationDate = expDate;
                    }
                });
                setApiCachedData(arrayAPI);
                localStorage.setItem('apiCachedData',JSON.stringify(arrayAPI));
            }
        }

    }

    return(    <Context.Provider value={{cart: cartData,searchString: searchString, apiCachedData: apiCachedData, updateApiCache:updateApiCache, setItemsFilter: setItemsFilter, setCartData: setCartData  }}>{props.children}</Context.Provider>);    
}

