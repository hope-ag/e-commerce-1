import React from "react";
import { Link } from "react-router-dom";
import styles from "./SingleProduct.module.scss";
function SingleProduct(props) {
  return (
    <div className={`${styles.container} row`}>
      <div className={styles.img}>
        <img src={props.img} alt='product' />
        <h3>{props.title}</h3>
      </div>
      <div className={styles.price}>
        <p>
          Price: <strong>${props.price}</strong>
        </p>
        <p>
          From: <strong>{props.company}</strong>
        </p>
      </div>
      <button className={styles.btn}>Add to cart</button>
      <Link className={styles.link} to='#'>
        More Info
      </Link>
    </div>
  );
}

export default SingleProduct;
