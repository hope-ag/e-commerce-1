import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import style from "./Navbar.module.scss";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <h3>LOGO</h3>
        </div>
        <nav className={`${style.navbar} ${clicked && style.visible}`}>
          <a href="/">ONE</a>
          <a href="/">TWO</a>
          <a href="/">THREE</a>
          <a href="/">FOUR</a>
          <a href="/">FIVE</a>
          <a href="/">SIX</a>
          <a href="/">SEVEN</a>
          <a href="/">EIGHT</a>
        </nav>
        <span
          className={`${style.hamburger} ${clicked && style.clicked} `}
          onClick={handleClick}
        >
          {clicked ? <GrClose /> : <HiOutlineMenuAlt3 />}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
