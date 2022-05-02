import React, { useState, createContext } from 'react';
import { checkIfDataExpired } from "utility/utility";

export const Context = createContext({
    cart: 0,
    apiCachedData: [],
    updateApiCache: (url,data,expDate) => {},
});

export const ContextProvider = (props) => {
    const [cart,setCart] = useState(0);
    const [apiCachedData,setApiCachedData] = useState([]);
    const updateApiCache = (url,data,expDate) => {
        console.log("-----------> updateApiCache:");
        console.log("url:",url);
        console.log("data:",data);
        console.log("expDate:",expDate);
        console.log("apiCachedData:",apiCachedData);
        let res = apiCachedData.filter((el) => el.url == url);
        if(!res.length){
            let arrayAPI = [...apiCachedData];
            arrayAPI.push({url:url,data:data, cachedDate: expDate});
            setApiCachedData(arrayAPI);
        }
        else{
            if(checkIfDataExpired(res[0]?.cachedDate)){
                console.log("## AGGIUNGIAMO DI NUOVO NELLA CACHE LA API");
                let arrayAPI = [...apiCachedData];
                arrayAPI.forEach((el)=>{
                    if(el.url == url){
                        el.data = data;
                        el.cachedDate = expDate;
                    }
                });
                setApiCachedData(arrayAPI);

            }
        }

    }

    return(    <Context.Provider value={{cart: cart, apiCachedData: apiCachedData, updateApiCache:updateApiCache  }}>{props.children}</Context.Provider>);    
}

