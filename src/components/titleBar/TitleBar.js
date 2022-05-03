import React  from 'react'
import Button from 'components/button/Button';
import classes from "./TitleBar.module.scss";
import { useNavigate } from "react-router-dom";


const TitleBar = (props) => {
  let navigate = useNavigate();
  return (
      <div className={classes.container} >
        <h2>{props.title}</h2>
        {(props.btText && props.btPath) &&  <Button  text={props.btText} onClick={()=> navigate(props.btPath)} />   }
      </div>
  );
}

export default TitleBar;
