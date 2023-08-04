import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CountDesk = () => {
  const basket = useSelector((state) => state.Data.basket);
  let total = 0;
  basket.map((data, i) => {
    return (total += data.quantity * data.sale_price);
  });

  localStorage.setItem("basketList", JSON.stringify(basket));
  return (
    <div className="right_side">
      <div className="right_side_content">
        <p>
          Yekun:<span>{total} AZN</span>
        </p>
        <p>
          Çeşid mal:<span>{basket.length} ədəd</span> 
        </p>
        <Link to="/payment">
          <button>Sifarişi tamamla</button>
        </Link>
      </div>
    </div>
  );
};

export default CountDesk;
