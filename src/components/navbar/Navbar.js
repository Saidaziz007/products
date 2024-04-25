import React from "react";
import "./Navbar.css";
import { NAV_LIST } from "../../static";
import { IoSearchSharp } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="nav-1">
        <div className="container">
          <div className="nav-top">
            <div className="nav-top-1">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <h4>ShopNow</h4>
            </div>
            <select name="" id="">
              <option value="">English</option>
              <option value="">Uzbek</option>
              <option value="">Russian</option>
            </select>
          </div>
        </div>
      </nav>
      <nav className="nav-2">
        <div className="container">
          <div className="nav-bottom">
            <NavLink className={"nav-bottom-a"} to={"/"}>
              <h1>Exclusive</h1>
            </NavLink>
            <ul className="nav-list">
              {NAV_LIST?.map((el) => (
                <li key={el.id} className="nav-items">
                  {el.title}
                </li>
              ))}
            </ul>
            <div className="nav-input">
              <input type="text" placeholder="What are you looking for?" />
              <IoSearchSharp />
            </div>
            <div className="nav-icons">
              <NavLink to={"/like"}>
                <LuHeart />
              </NavLink>
              <NavLink to={"/cart"}>
                <MdOutlineShoppingCart />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
