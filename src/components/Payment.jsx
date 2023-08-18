import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Payment = ({ setIsOpen }) => {
  const navigate=useNavigate()
  const basket = useSelector((state) => state.Data.basket);

  const myOrderIDvalue = useSelector((state) => state.Data.myOrderIDvalue);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoader, setIsloader] = useState(false);
  const orderItemCreate = async (e) => {
    e.preventDefault();

    setIsloader(true);

    let success = true; // Предполагаем успешное выполнение

    for (const item of basket) {
      const data = {
        quantity: item.quantity,
        color: item.choise_color,
        size: item.choise_size,
        product: item.id,
        order: myOrderIDvalue[0].id,
      };

      console.log(data);

      try {
        await axios.post(
          "https://derzi.pythonanywhere.com/api/tailor/orderitem-create/",
          data
        );
        await delay(1000);
      } catch (error) {
        console.log(error);
        success = false; // Если хотя бы один запрос завершился с ошибкой
        setIsloader(false);
      }
    }

    if (success) {
      
      setIsSuccessful(true); // Если все запросы выполнены успешно
      setIsloader(false);
    }
  };

  if (isSuccessful) { 
    Swal.fire({
      icon: "success",
      title: "Ödəmə uğurla həyata keçdi. Alış üçün təşəkkürlər :)",
      text: "",
      timer: 5000,
    });
    setTimeout(function(){
      localStorage.removeItem('basketList')
      window.location.href = "/";
    }, 3000)
   
  }

  return (
    <div className="wrapper">
      <div className="payment">
        <div className="payment-logo">
          <img src="/images/credit-card.png" alt="" />
        </div>
        <h2>Payment Gateway</h2>

        {isLoader ? (
          <form className="form_lodarer_wrapper">
            {" "}
            <div className="loader_payment"></div>
          </form>
        ) : (
          <form className="form">
            <div className="card space icon-relative">
              <label className="label">Kartın nömrəsi</label>
              <input
                type="text"
                className="input"
                data-mask="0000 0000 0000 0000"
                placeholder="0000 0000 0000 0000"
              />
              <i className="far fa-credit-card"></i>
            </div>
            <div className="card-grp space">
              <div className="card-item icon-relative">
                <label className="label">Bitmə tarixi</label>
                <input
                  type="text"
                  name="expiry-data"
                  className="input"
                  placeholder="00 / 00"
                />
                <i className="far fa-calendar-alt"></i>
              </div>
              <div className="card-item icon-relative">
                <label className="label">CVV</label>
                <input
                  type="text"
                  className="input"
                  data-mask="000"
                  placeholder="000"
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="btn" onClick={orderItemCreate}>
              Ödənişi Tamamla
            </div>
          </form>
        )}
      </div>
      <div className="info_xmark" onClick={() => setIsOpen(false)}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default Payment;
