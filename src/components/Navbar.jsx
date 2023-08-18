import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLoggedInuser } from "../action/MainAction";
import { useDispatch, useSelector } from "react-redux";

import { FiShoppingBag } from "react-icons/fi";
import { AiFillInstagram, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hash, key } = useLocation();

  const [isVisible, setIsVisible] = useState(false);

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

  const [isLoading, setIsLoading]=useState(true)

  useEffect(() => {
    dispatch(getLoggedInuser(userID))
    .then(()=>setIsLoading(false))
    .catch(()=>setIsLoading(false))
  }, [dispatch, userID]);

  const loggedInUser = useSelector((state) => state.Data.loggedInUser);

  const goToMyFavourite = () => {
    navigate("/myfavourites");
  };
  const goToBasket = () => {
    // window.location.href = "#/basket";
    navigate("/basket")
  };
  const goToMyOrderItems = () => {
    // window.location.href=("/myorders")
    navigate("/myorders");
  };

  const logExit = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("userID");
    window.location.reload()
    // window.location.href = "/";
    // navigate("/");

  };

  const basket = useSelector((state) => state.Data.basket);
  let total = 0;
  basket.map((data) => {
    return (total += data.quantity);
  });

  return (
    <header>
      <div className="header_container">
        <div className="logo">
          <Link to="/">
            {/* <img src={logo} alt="Sara Hatun Logo" /> */}
            <span className="logo_style">Sara Hatun</span>
          </Link>
        </div>
        <nav>
          <input type="checkbox" id="checkbox" />
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
              <Link to="/contact">Bİzİmlə əlaqə</Link>
            </li>
            <div className="social_media_i">
              <Link
                to="https://www.instagram.com"
                target="_blank"
                style={{ color: "#000" }}
              >
                <AiFillInstagram className="instagram" size={25} />
              </Link>
              <Link
                to="https://www.facebook.com"
                target="_blank"
                style={{ color: "#000" }}
              >
                <FaFacebookF className="facebook" size={20} />
              </Link>
            </div>
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
          <div className="user_container_modals">
            {isLoading ? <div className="loader" style={{width:"21px", height:'19px'}}></div>: <i
            
              className={
                Object.keys(loggedInUser).length !== 0
                  ? "fa-solid fa-circle-user"
                  : "fa-regular fa-user"
              }
            ></i>}
            

            {Object.keys(loggedInUser).length !== 0 ? (
              <div className="user_modal_hover">
                <div style={{fontSize:"1.3rem"}} className="loggedInUser_content_name">
                  <span>{loggedInUser.email}</span>
                </div>
                <div onClick={goToMyFavourite} className="loggedInUser_content">
                  <i className="fa-solid fa-heart"></i>
                  <span>Favorilərim</span>
                </div>
                <div
                  className="loggedInUser_content"
                  onClick={goToMyOrderItems}
                >
                  <i className="fa-solid fa-box"></i>
                  <span>Sifarişlərim</span>
                </div>
                <div onClick={logExit} className="loggedInUser_content">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span>Çıxış</span>
                </div>
              </div>
            ) : (
              <div style={{width:'140px'}} className="user_modal_hover">
                <button onClick={goToLogin}>Daxil ol</button>
                <button onClick={goToRegister}>Qeydiyyatdan keç</button>
              </div>
            )}
          </div>

          <div className="bag_icon" onClick={goToBasket}>
            <FiShoppingBag size={22} />
            <span className="basket_count">{total}</span>
          </div>
          <div className="social_media_icons">
            <Link
              to="https://www.instagram.com"
              target="_blank"
              style={{ color: "#000" }}
            >
              <AiFillInstagram className="instagram" size={25} />
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              style={{ color: "#000" }}
            >
              <FaFacebookF className="facebook" size={20} />
            </Link>
          </div>
          <div>
            <label htmlFor="checkbox">
              <AiOutlineMenu className="burger_menu"/>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
