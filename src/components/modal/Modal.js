import React from 'react'
import classes from "./Modal.module.scss";
import Dialog from '@mui/material/Dialog';
import Grow from "@mui/material/Grow";
import CloseIcon from "@mui/icons-material/Close";

const Modal = (props) => {

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
      TransitionComponent={Grow}
      maxWidth={false}
    >
      <div className={classes.container} >
        <h2>Cart  <CloseIcon onClick={() => props.onClose()} /></h2>
        {(props.cart?.length) && (<ul>
          {props.cart.map((el,index)=> <li key={index} ><strong>Product:</strong> {el.id} - <strong>colorCode:</strong> {el.colorCode} - <strong>storageCode:</strong> {el.storageCode}</li>)}
          </ul>)}
      </div>
    </Dialog>
  );
}

export default Modal;
