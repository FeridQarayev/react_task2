import React from "react";
import { Link } from "react-router-dom";
import styled from "./navbar.module.scss";

function Navbar() {
  return (
    <header className={styled.navbar}>
      <div className={styled.navbar__left}>
        <div className={styled.navbar__left__logo}>
          <div className={styled.navbar__left__logo__img}>
            <img
              src="https://preview.colorlib.com/theme/course/images/logo.png.webp"
              alt="logo"
            />
            <span>course</span>
          </div>
        </div>
        <div className={styled.navbar__left__links}>
          <div className={styled.navbar__left__links__nav}>
            <ul>
              <li>
                <Link to="home">Home</Link>
              </li>
              <li>
                <a href="#2">about us</a>
              </li>
              <li>
                <a href="#3">courses</a>
              </li>
              <li>
                <a href="#4">elements</a>
              </li>
              <li>
                <a href="#5">news</a>
              </li>
              <li>
                <a href="#6">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styled.navbar__right}>
        <img
          src="https://preview.colorlib.com/theme/course/images/phone-call.svg"
          alt="tel"
        />
        <span>+43 4566 7788 2457</span>
      </div>
    </header>

  );
}

export default Navbar;
