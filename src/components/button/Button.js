import React  from 'react'
import classes from "./Button.module.scss";

const Button = (props) => {

  return (
    <button className={classes.container} onClick={props.onClick} >
       {props.text}
    </button>
  );
}

export default Button;
