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
        interval={8000}
        transitionTime={500}
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
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi similique
        provident id voluptate, iure quidem dolorem voluptatibus illo quam atque
        inventore cum ullam dolore perspiciatis eligendi veritatis
        exercitationem deserunt. Magni? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam ipsa nulla tenetur, facilis, sed officiis
        mollitia sit cupiditate repellat, totam ducimus! Quasi quia rem labore,
        possimus ex blanditiis doloremque sed debitis laboriosam voluptates sint
        quis cumque! Modi, ipsam vel inventore ipsum consequatur quisquam,
        suscipit enim alias commodi doloribus laborum dolorem culpa accusantium
        adipisci? Repudiandae, sit optio ipsa mollitia dicta qui, soluta, vitae
        totam nemo commodi a molestias aperiam voluptatum eum? Odio natus
        eligendi iusto temporibus a ipsam dolor, saepe consectetur sed
        recusandae cupiditate excepturi provident veniam! Asperiores ut voluptas
        laudantium numquam magni ex impedit! Corporis atque animi officia rerum
        porro, quas quis commodi assumenda ex magnam voluptatibus eaque placeat
        distinctio eos? Minima omnis beatae eveniet, deserunt a provident nulla
        sit at odio saepe velit neque unde numquam. At placeat nostrum
        asperiores. Deleniti aperiam officia dicta quia corporis ex voluptatem
        nisi necessitatibus perspiciatis natus commodi reprehenderit quae cum
        excepturi obcaecati explicabo eligendi quos, facilis possimus voluptates
        blanditiis ipsam error! Quaerat, recusandae nihil tenetur modi ad,
        aliquam esse eius repellendus assumenda distinctio numquam quibusdam
        error qui ex explicabo. Alias delectus consequuntur nisi, eos animi
        culpa deserunt placeat expedita facere quasi eum esse praesentium beatae
        quo maxime adipisci quam laboriosam nam sequi quod distinctio dolorem ea
        vero. Dolor maiores laborum nobis architecto qui aliquid, facere, enim
        ratione vitae repellat eligendi, maxime eius modi repudiandae ad iure
        laboriosam esse? Ipsa saepe et aut, est error autem eligendi fugit totam
        modi harum non. Dolorum officia explicabo in saepe veniam esse impedit
        cumque deleniti ipsum, eveniet deserunt quo eaque quasi non aperiam
        voluptas et reiciendis nobis culpa quam illum unde. Doloribus vero fugit
        ipsam officiis, dolorum laboriosam eum aperiam perspiciatis nesciunt
        quos debitis beatae porro cupiditate! Dolores rem pariatur commodi
        quisquam. Consequuntur dolor atque eos sunt quam vel, excepturi minus
        voluptatem pariatur sit ullam ut dignissimos odit suscipit nemo
        temporibus? Numquam harum voluptate corporis eius inventore adipisci
        consequuntur dolorem perferendis molestiae! Provident, labore dolorem
        quas fuga culpa facilis ad aut, odio officiis et iste omnis optio
        assumenda, tempore impedit quo dolores! Id est voluptate nemo omnis sint
        voluptatem minus repellendus nobis accusantium, obcaecati fugiat quia
        vitae ipsum quisquam voluptas dolore, commodi magnam at quam adipisci
        nam eligendi repudiandae! Natus magnam ipsa placeat inventore architecto
        libero nihil sint repellendus unde. Ratione nemo vero ducimus, porro
        culpa eaque iste? Dolorem eos repellat aliquam distinctio culpa
        perspiciatis ipsum, deleniti porro repudiandae laboriosam cupiditate id,
        nesciunt quisquam voluptas corrupti! Assumenda, iure? Tempora molestias,
        omnis optio, reprehenderit temporibus dolorem placeat sit eaque,
        aspernatur exercitationem numquam quae odit? Dolore officia itaque
        tenetur nobis inventore delectus reprehenderit eos, totam vero quasi
        tempora quibusdam amet. Quis tempore vero eligendi hic, voluptas labore
        itaque. Sunt, repudiandae. Amet aliquid ducimus modi vitae blanditiis
        minus non consectetur quia obcaecati, saepe iste sequi architecto
        explicabo numquam soluta cum magni illo. Repellat, corporis error
        maiores id pariatur magni mollitia facilis odio minus, nisi adipisci et,
        laboriosam repellendus odit quis minima at incidunt quidem autem saepe.
        Saepe vitae modi dolore fugit repellendus est cum pariatur! Itaque omnis
        corrupti fugit dolore.
      </p>
    </div>
  );
}

export default Hero;
