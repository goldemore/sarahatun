import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Payment from "./Payment";

const CountDesk = ({ myOrderIDvalue }) => {
  const basket = useSelector((state) => state.Data.basket);
  const [isOpen, setIsOpen] = useState(false);
  let total = 0;
  basket.map((data, i) => {
    return (total += data.sale_price
      ? data.quantity * data.sale_price
      : data.quantity * data.price);
  });
  const payment = () => {
    if (basket.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Səbət boşdur",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (myOrderIDvalue.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "İlk öncə Ünvan bilgilərini doldurun",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className="right_side">
      <div className="right_side_content">
        <p>
          Yekun:<span>{total} AZN</span>
        </p>
        <p>
          Çeşid mal:<span>{basket.length} ədəd</span>
        </p>
        <button onClick={payment}>Ödəniş et</button>
      </div>
      {isOpen && <Payment isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default CountDesk;
