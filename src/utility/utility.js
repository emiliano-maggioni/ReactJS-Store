
export const checkIfDataExpired = (dateExp) => {
    if(dateExp){
        const actual = new Date();
        let  diff = (dateExp.getTime() - actual.getTime()) / 1000;
        if(diff <= 0)
            return true;
        else
            return false;
    }
    else{
        return true; 
    }
};


export const createExpDate = () => {
    //CREATE AN EXPIRATION DATE ADDING AN HOUR TO ACTUAL TIME.
        //let expDate = new Date(Date.now() + (10 * 1000) );
    let expDate = new Date(Date.now() + (60 * 60 * 1000) );
        return expDate; 
};

export const filterApiCachedByUrl = (cached,url) => {
    let res = cached.filter((el) => el.url == url);
    if(res?.length)
       return res[0].data; 
    else
       return [];
};


