import { Link, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../logoimg/SH logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [key, hash]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div className="header_container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Sara Hatun Logo" />
          </Link>
        </div>
        <nav>
          <ul className="nav_list">
            <li>
              <Link to="/">Əsas səhifə</Link>
            </li>
            <li>
              <Link to="/#mehsullarimiz">Məhsullar</Link>
              {/* <Link to="/#mehsullarimiz">Məhsullar</Link> */}
            </li>
            <li>
              <Link to="/#haqqimizda">Haqqımızda</Link>
              {/* <Link to="/">Haqqımızda</Link> */}
            </li>
            <li>
              <Link to="/contact">Bizimlə əlaqə</Link>
            </li>
          </ul>
        </nav>

        <button
          className="btn-scrollTop"
          style={{ display: isVisible ? "block" : "none" }}
          onClick={goTop}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>

        <div className="header_icons_container">
          <div className="input_icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 19.5C15.9183 19.5 19.5 15.9183 19.5 11.5C19.5 7.08172 15.9183 3.5 11.5 3.5C7.08172 3.5 3.5 7.08172 3.5 11.5C3.5 15.9183 7.08172 19.5 11.5 19.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5 21.5L17.15 17.15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" placeholder="Axtarış..." />
          </div>
          <Link to="/login">
            <svg
              className="user_icon"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 21.5V19.5C20.5 18.4391 20.0786 17.4217 19.3284 16.6716C18.5783 15.9214 17.5609 15.5 16.5 15.5H8.5C7.43913 15.5 6.42172 15.9214 5.67157 16.6716C4.92143 17.4217 4.5 18.4391 4.5 19.5V21.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 11.5C14.7091 11.5 16.5 9.70914 16.5 7.5C16.5 5.29086 14.7091 3.5 12.5 3.5C10.2909 3.5 8.5 5.29086 8.5 7.5C8.5 9.70914 10.2909 11.5 12.5 11.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="bag_icon">
            <Link to="/basket">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 2.5L3.5 6.5V20.5C3.5 21.0304 3.71071 21.5391 4.08579 21.9142C4.46086 22.2893 4.96957 22.5 5.5 22.5H19.5C20.0304 22.5 20.5391 22.2893 20.9142 21.9142C21.2893 21.5391 21.5 21.0304 21.5 20.5V6.5L18.5 2.5H6.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 6.5H21.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 10.5C16.5 11.5609 16.0786 12.5783 15.3284 13.3284C14.5783 14.0786 13.5609 14.5 12.5 14.5C11.4391 14.5 10.4217 14.0786 9.67157 13.3284C8.92143 12.5783 8.5 11.5609 8.5 10.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <span className="basket_count">3</span>
          </div>
          <FaFacebook className="facebook" />
          <AiFillInstagram className="instagram" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
