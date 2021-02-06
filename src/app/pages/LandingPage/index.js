import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import style from "./LandingPage.module.scss";

function LandingPage() {
  return (
    <div className={style.LandingPage}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default LandingPage;
