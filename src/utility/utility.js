
export const checkIfDataExpired = (dateExp) => {
    if(dateExp){
        const actual = new Date();
        let  diff = (dateExp.getTime() - actual.getTime()) / 1000;
        console.log("diff :"+diff);
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
    //CREATE AN EXPIRATION DATE FROM ACTUAL TIME ADDING AN HOUR.
    //let expDate = new Date(Date.now() + (60 * 60 * 1000) );
    let expDate = new Date(Date.now() + (20 * 1000) );
        console.log("expDate:",expDate);
        return expDate; 
};

