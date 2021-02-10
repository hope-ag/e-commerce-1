import React from "react";
import { imgData } from "../../../stockImgData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import style from "./Hero.module.scss";
console.log(imgData);
function Hero() {
  return (
    <div className={style.hero}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={10000}
        transitionTime={300}
        stopOnHover={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {imgData.map((img) => (
          <div key={img.id}>
            <img className={style.bg} src={img.path} alt={img.title} />
            <h1 className={style.quote}>{img.quote}</h1>
            <p className={` ${style.caption}`}>{img.attr}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
