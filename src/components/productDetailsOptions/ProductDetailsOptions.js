import React, { useContext } from 'react'
import Button from 'components/button/Button';
import classes from "./ProductDetailsOptions.module.scss";
import { useForm, Control } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { Context } from "contexts/Context"; 
import { useParams } from "react-router-dom";
import { postAPI } from 'utility/callsAPI';


const ProductDetailsOptions = (props) => {
  const defcontext = useContext(Context);
  let { id } = useParams();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    if(data){
          let dataToSend = {...data};
          dataToSend.id = id;
          const dataRes = await postAPI("/api/cart",dataToSend);
          if(dataRes)
            defcontext.setCartData(dataToSend);
    }
  }

  const prodData = props.prodData;
  
  return (
    <div className={classes.container}  >
      {(prodData) && (
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
         <strong>Storage: </strong>
         <FormControl className={classes.input}>
            <Select
              id="storageCode"
              defaultValue={(prodData.options.storages?.length == 1) ? prodData.options.storages[0].code : "" }
              {...register("storageCode", { required: "Select a storage", })}
            >
              <MenuItem key="" value="" >Select</MenuItem>
              {prodData.options.storages.map((el, index) => <MenuItem key={index} value={el.code}>{el.name}</MenuItem>)}
            </Select>
            <FormHelperText>{!!errors.storageCode ? errors.storageCode.message : null}</FormHelperText>
          </FormControl>
        </div>
        <div>
         <strong>Colors: </strong>
         <FormControl className={classes.input}>
            <Select
              id="colorCode"
              defaultValue={(prodData.options.colors?.length == 1) ? prodData.options.colors[0].code : "" }
              {...register("colorCode", { required: "Select a color", })}
            >
              <MenuItem key="" value="" >Select</MenuItem>
              {prodData.options?.colors.map((el, index) => <MenuItem key={index} value={el.code}>{el.name}</MenuItem>)}
            </Select>
            <FormHelperText>{!!errors.colorCode ? errors.colorCode.message : null}</FormHelperText>
          </FormControl>
        </div>
        <Button text="Add to cart" type="submit" />
      </form>
      )}


      {/* <TextField
                        id="interest_rate"
                        label="Tasso di interesse"
                        {...register("interest_rate", {
                          required: "Inserisci un tasso valido",
                        })}
                        helperText={!!errors.interest_rate ? errors.interest_rate.message : null}
                        className={classes.interest_rate}
                  /> */}



      {/* <FormControl >    
                    <Controller
                        render={({ field }) => (
                          <Select {...field} >
                            <MenuItem key="" value="" >Seleziona</MenuItem>
                            {prodData.options?.colors.map((el,index) =>  <MenuItem key={index} value={el.code}>{el.name}</MenuItem>)}
                          </Select>
                        )}
                        rules={{  required: "Inserisci un Filter field valido", }}
                        control={control}
                        name="filter_name"                        
                        defaultValue={filterNameVal || ""}                                         
                    />
                    <FormHelperText>{!!errors.filter_name ? errors.filter_name.message : null}</FormHelperText>
                  </FormControl>              */}    </div>
  );
}

export default ProductDetailsOptions;
