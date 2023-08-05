import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const CountDesk = () => {
  const basket = useSelector((state) => state.Data.basket);
  let total = 0;
  basket.map((data, i) => {
    return (total += data.quantity * data.sale_price);
  });
  const testing = () => {
    if (!localStorage.getItem("ACCESS_TOKEN")) {
      Swal.fire({
        icon: "error",
        title: "Sifarişi tamamlamaq üçün, şəxsi kabinetinizə daxil olun.",
        timer: 2000,
      });
    }
  };

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

        <button onClick={testing}>Sifarişi tamamla</button>
      </div>
    </div>
  );
};

export default CountDesk;
