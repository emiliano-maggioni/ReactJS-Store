import axios from "axios";
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 60 * 60 * 1000  //1 hour expirations
})

export const instance = axios.create({ 
  baseURL: "https://front-test-api.herokuapp.com",
  adapter: cache.adapter
});

//FUNCTION TO DO GET API
export const getAPI = (path) => {

    return instance.get(path).then(async (val)=>{ 
      //const length = await cache.store.length();
      return val; 
    }).catch(  (err)=>{ 
       alert("API Error:",err);       
       return "ERROR";
    });

}

//instance.interceptors.use();