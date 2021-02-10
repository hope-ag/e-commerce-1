import React from "react";
import { storeProducts as data } from "../../../data";
import SingleProduct from "../SingleProduct";
import styles from "./ProductList.module.scss";

function ProductList() {
  return (
    <div id='shop' className={styles.shop}>
      <div className={styles.heading}>
        <h1>Trending Now</h1>
        <div className={styles.underline}></div>
      </div>
      <section className={styles.container}>
        <div className={styles.items}>
          {data.map((item) => {
            const {
              description,
              title,
              img,
              price,
              id,
              company,
              inCart,
              count,
              total,
              info,
            } = item;
            return (
              <SingleProduct
                title={title}
                img={img}
                price={price}
                company={company}
                key={id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ProductList;
