import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrderID } from "../action/MainAction";
import PaymentDesk from "./PaymentDesk";
import axios from "axios";
import VisitCartOfUser from "./VisitCartOfUser";
import { Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import titles from "../pages/titles/titles";

const AddressPayment = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const [isLoading, setIsLoading] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [noteValue, setNoteValue] = useState("");

  const loggedInUser = useSelector((state) => state.Data.loggedInUser);
  const [isLoading1, setIsLoading1] = useState(true);

  useEffect(() => {
    dispatch(getMyOrderID())
      .then(() => setIsLoading1(false))
      .catch(() => setIsLoading1(false));

    if (loggedInUser) {
      setNameValue(loggedInUser.first_name || "");
      setLastNameValue(loggedInUser.last_name || "");
      setEmailValue(loggedInUser.email || "");
      setNumberValue(loggedInUser.phone_number || "");
      setAddressValue("");
    }
  }, [dispatch, loggedInUser]);

  const myOrderIDvalue = useSelector((state) => state.Data.myOrderIDvalue);
  console.log(myOrderIDvalue);

  const nameChange = (e) => {
    setNameValue(e.target.value);
  };
  const lNameChange = (e) => {
    setLastNameValue(e.target.value);
  };
  const emailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const numberChange = (e) => {
    setNumberValue(e.target.value);
  };
  const adressChange = (e) => {
    setAddressValue(e.target.value);
  };
  const noteChange = (e) => {
    setNoteValue(e.target.value);
  };

  if (!localStorage.getItem("ACCESS_TOKEN")) {
    return <Navigate to="/login" />;
  }

  const orderCreate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      first_name: nameValue,
      last_name: lastNameValue,
      email: emailValue,
      phone_number: numberValue,
      address: addressValue,
      note: noteValue,
      user: loggedInUser.id,
    };
    console.log(data);
    await axios({
      method: "POST",
      url: "https://derzi.pythonanywhere.com/api/tailor/order-create/",
      data,
    })
      .then((resp) => {
        console.log(resp);
        setIsLoading(false);
        window.location.reload()

        // window.location.href = "#/basket/payment";
        // navigate("/basket/payment")
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Helmet>
        <title>{titles.basketPayment} </title>
      </Helmet>
      <Navbar />
      <h2 className="head_of_address_paymenth2">Ünvan Bilgiləri</h2>
      <div className="address_payment_container">
        {isLoading1 ? (
          <p>Yüklənir...</p>
        ) : myOrderIDvalue.length === 0 ? (
          <form onSubmit={orderCreate}>
            <div className="user_information">
              <div className="name_lastName">
                <input
                  type="text"
                  placeholder="Ad..."
                  value={nameValue}
                  onChange={nameChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Soyad..."
                  value={lastNameValue}
                  onChange={lNameChange}
                  required
                />
              </div>
              <div className="email_phone">
                <input
                  type="email"
                  placeholder="Email..."
                  value={emailValue}
                  onChange={emailChange}
                  required
                />
                <input
                  type="number"
                  placeholder="Tel:..."
                  value={numberValue}
                  onChange={numberChange}
                  required
                />
              </div>
              <textarea
                cols="10"
                rows="6"
                placeholder="Çatdırılacaq ünvan..."
                value={addressValue}
                onChange={adressChange}
                required
              ></textarea>
              <textarea
                cols="10"
                rows="2"
                placeholder="Qeyd..."
                value={noteValue}
                onChange={noteChange}
              ></textarea>
              <button
                className="save_userInfo_btn"
                style={{ width: "150px", marginTop: "10px" }}
              >
                {isLoading ? <span className="loader"></span> : "Yadda saxla"}
              </button>
            </div>
          </form>
        ) : (
          myOrderIDvalue.map((data, i) => {
            return <VisitCartOfUser key={i} dataMyAddress={data} />;
          })
        )}

        <PaymentDesk myOrderIDvalue={myOrderIDvalue} />
      </div>
      <Footer />
    </div>
  );
};

export default AddressPayment;
