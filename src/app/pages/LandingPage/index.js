import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import style from "./LandingPage.module.scss";

function LandingPage() {
  return (
    <div className={style.LandingPage}>
      <Navbar />
      <Hero />
      <ProductList />
    </div>
  );
}

export default LandingPage;
