import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to='/'>
            <h1>LOGO</h1>
          </Link>
        </div>
        <nav className={`${style.navbar} ${clicked && style.visible}`}>
          <Link to='#shop'>Shop</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/account'>Account</Link>
          <Link to='/admin'>Admin</Link>
          <Link to='/'>Contact Us</Link>

          <button className={style.btn}>
            <Link to='/login'>Log In</Link>
          </button>
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
