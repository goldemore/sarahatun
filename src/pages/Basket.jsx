import { useSelector } from "react-redux";
import BasketBox from "../components/BasketBox";
import CountDesk from "../components/CountDesk";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Basket = () => {
  const basket = useSelector((state) => state.Data.basket);

  return (
    <div>
      <Navbar />
      <div className="b_container">
        <h2>Alış-veriş səbətim</h2>
        {basket.length !== 0 ? (
          <div className="basket_box">
            <div className="basket_colum_orders">
              <BasketBox />
            </div>
            <CountDesk />
          </div>
        ) : (
          <div className="basket_box">
            <div className="basket_colum_orders">
              <span style={{fontSize:'2rem'}}>Səbətdə mal yoxdur :(</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
