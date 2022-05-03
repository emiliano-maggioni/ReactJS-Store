import { checkIfDataExpired } from "utility/utility";

export const checkStorageItemExpired = (urlAPI) => {
  //CHECK IF SOME ITEM HAS EXPIRED AND REMOVE IT FROM STORAGE
  let storage = localStorage.getItem('apiCachedData');
    storage = JSON.parse(storage);

    if(!storage?.length){
      return {expired:true};
    }
    else{      
      let res = storage.filter((el) => el.url == urlAPI);
      if(checkIfDataExpired(new Date(res[0]?.expirationDate))) {
        //REMOVE API FROM STORAGE
        let arrayAPI = [...storage];
        arrayAPI = arrayAPI.filter((el) => el.url !== urlAPI);
        localStorage.setItem('apiCachedData',JSON.stringify(arrayAPI));
        return {expired:true};
      }
      else{
        return {expired:false,data:res[0]?.data,expirationDate:res[0]?.expirationDate};
      }
    }
}
