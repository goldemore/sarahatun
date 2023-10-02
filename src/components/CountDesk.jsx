import React from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CountDesk = () => {
  const basket = useSelector((state) => state.Data.basket);
  let total = 0;
  basket.forEach((data) => {
    const price = data.sale_price ? data.sale_price : data.price;
    total += parseFloat((data.quantity * price).toFixed(2));
  });

  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.Data.loggedInUser);
  console.log(loggedInUser);
  const paymentProcces = () => {
    if (Object.keys(loggedInUser).length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Zəhmət olmasa şəxsi kabinetinizə daxil olun",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      navigate("/basket/payment");
    }
  };

  return (
    <div className="right_side">
      <div className="right_side_content">
        <p>
          Yekun:<span>{total} AZN</span>
        </p>
        <p>
          Məhsulun növü:<span>{basket.length} növ</span>
        </p>

        <button onClick={paymentProcces}>Sifarişi tamamla</button>
      </div>
    </div>
  );
};

export default CountDesk;
