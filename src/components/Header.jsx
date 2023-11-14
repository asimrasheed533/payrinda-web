// import {} from "@router";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Menu, X } from "react-feather";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function changeNavOpenClose() {
    if (window.innerWidth <= 900) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    changeNavOpenClose();
    window.addEventListener("resize", changeNavOpenClose);
    window.addEventListener("scroll", () => {
      changeNavOpenClose();
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          if (window.innerWidth <= 900) {
            setIsOpen(false);
          }
        }}
      >
        <div className="header__nav__container">
          <Link to="/" className="header__nav__container__logo">
            <img src={logo} alt="sdad" />
          </Link>

          {isOpen ? (
            <div className="header__nav__container__menu">
              <NavLink className="header__nav__container__menu__links">
                Home
              </NavLink>
              <NavLink className="header__nav__container__menu__links">
                Our Solutions
              </NavLink>
              <NavLink className="header__nav__container__menu__links">
                How it works
              </NavLink>
              <NavLink className="header__nav__container__menu__links">
                About us
              </NavLink>
            </div>
          ) : null}
          <NavLink className="header__nav__container__menu__links__btn">
            Contact Us
          </NavLink>

          <button
            className="header__content__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            type="button"
            title="open close menu"
          >
            {isOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
        </div>
      </ClickAwayListener>
    </>
  );
}
