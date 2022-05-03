import React  from 'react'
import classes from "./ProductDetailsBox.module.scss";

const ProductDetailsBox = (props) => {
  const prodData = props.prodData;
  return (
      <div className={classes.container}  >
        <p>  <strong>Brand:</strong> {prodData.brand}  </p>
        <p>  <strong>Model:</strong> {prodData.model}  </p>
        <p>  <strong>Price:</strong> {prodData.price}  </p>
        <p>  <strong>CPU:</strong> {prodData.cpu}  </p>
        <p>  <strong>RAM:</strong> {prodData.ram}  </p>
        <p>  <strong>Operating system:</strong> {prodData.os}  </p>
        <p>  <strong>Display Resolution:</strong> {prodData.displayResolution}  </p>
        <p>  <strong>Battery:</strong> {prodData.battery}  </p>
        <p>  <strong>Primary Camera:</strong> {prodData.primaryCamera}  </p>
        <p>  <strong>Dimensions:</strong> {prodData.dimentions}  </p>
        <p>  <strong>Weight:</strong> {prodData.weight}  </p>
      </div>
  );
}

export default ProductDetailsBox;
