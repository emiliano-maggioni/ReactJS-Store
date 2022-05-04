import axios from "axios";


export const instance = axios.create({ 
  baseURL: "https://front-test-api.herokuapp.com",
});

//FUNCTION TO DO GET API
export const getAPI = (path) => {

  return instance.get(path).then(async (val)=>{ 
    return val.data; 
  }).catch(  (err)=>{ 
     alert("API Error:",err);       
     return "ERROR";
  });

}

//FUNCTION TO DO POST API
export const postAPI = (path,params) => {

  return instance.post(path,params).then(async (val)=>{ 
    return val.data; 
  }).catch(  (err)=>{ 
     alert("API Error:",err);       
     return "ERROR";
  });

}

//instance.interceptors.use();