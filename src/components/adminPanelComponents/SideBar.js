import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side_bar">
      <div className="sb_head">
        <div className="fa-user_circle">
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="sb_head_text">
          <p>Xoş gəlmisiniz</p>
          <span>İstifadəçi</span>
        </div>
      </div>
      <hr />
      <nav className="sb_nav_list">
        <ul>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
            <Link className="nav_li_a" to={"/orders"}>
              Sifarişlər
            </Link>
          </li>
          
          <li>
            <i className="fa-solid fa-box-open"></i>
            <Link className="nav_li_a" to={"/products"}>
              Məhsullar
            </Link>
          </li>
          <li>
          <i className="fa-solid fa-money-check-dollar"></i>
            <Link className="nav_li_a" to={""}>
              Hesabat
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <Link className="nav_li_a" to={"/messages"}>
              Məktublar
            </Link>
          </li>
          <li>
          <i className="fa-solid fa-box-archive"></i>
            <Link className="nav_li_a" to={""}>
              Arxiv
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
