import { Link, useLocation } from "react-router-dom";
import logo from "../logoimg/SH logo.png";
import { useEffect, useState } from "react";
import { getLoggedInuser } from "../action/MainAction";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
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

  const goToLogin = () => {
    window.location.href = "#/login";
  };
  const goToRegister = () => {
    window.location.href = "#/register";
  };

  const userID = localStorage.getItem("userID");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedInuser(userID));
  }, [dispatch, userID]);

  const loggedInUser = useSelector((state) => state.Data.loggedInUser);
  
  const logExit = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("userID");
    window.location.href = "#";
  };

 const basket = useSelector(state=>state.Data.basket)
 let total=0
 basket.map(data=>{
  return total+=data.quantity
 })

 const goToBasket=()=>{
  window.location.href="#/basket"
 }

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
              <Link to="/">Əsas səhİfə</Link>
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
              <Link to="/contact">BİZİMLƏ ƏLAQƏ</Link>
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

          <div className="user_container_modals">
            {Object.keys(loggedInUser).length !== 0 ? (
              <i className="fa-regular fa-address-card"></i>
            ) : (
              <i className="fa-regular fa-user"></i>
            )}

            {Object.keys(loggedInUser).length !== 0 ? (
              <div className="user_modal_hover">
                <div className="loggedInUser_content_name">
                  <span>{loggedInUser.email}</span>
                </div>
                <div className="loggedInUser_content">
                  <i className="fa-solid fa-heart"></i>
                  <span>Favorilərim</span>
                </div>
                <div className="loggedInUser_content">
                  <i className="fa-solid fa-box"></i>
                  <span>Sifarişlərim</span>
                </div>
                <div onClick={logExit} className="loggedInUser_content">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span>Çıxış</span>
                </div>
              </div>
            ) : (
              <div className="user_modal_hover">
                <button onClick={goToLogin}>Daxil ol</button>
                <button onClick={goToRegister}>Qeydiyyatdan keç</button>
              </div>
            )}
          </div>

          <div className="bag_icon" onClick={goToBasket}>
            
              <i
                style={{ color: "black" }}
                className="fa-solid fa-bag-shopping"
              ></i>
            
            <span className="basket_count">{total}</span>
          </div>
          <Link
            style={{ color: "blue" }}
            to="https://www.facebook.com"
            target="_blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="https://www.instagram.com" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
      </div>
    </header> 
  );
};

export default Navbar;
