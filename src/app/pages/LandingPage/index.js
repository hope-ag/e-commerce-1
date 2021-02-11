import React from "react";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import style from "./LandingPage.module.scss";

function LandingPage() {
  return (
    <div className={style.LandingPage}>
      <Hero />
      <ProductList />
    </div>
  );
}

export default LandingPage;
