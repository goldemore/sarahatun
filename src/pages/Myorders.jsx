import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";
import MyOrdersItems from "../components/MyOrdersItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMyOrderItems } from "../action/MainAction";
import { Helmet } from "react-helmet";
import titles from "./titles/titles";

const MyOrders = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getMyOrderItems())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const myOrderItemsValue = useSelector(
    (state) => state.Data.myOrderItemsValue
  );
  const myOrderItemsAddress = useSelector(
    (state) => state.Data.myOrderItemsAddress
  );
  const addressData = myOrderItemsAddress;

  console.log(myOrderItemsAddress);

  if (!localStorage.getItem("ACCESS_TOKEN")) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Helmet>
        <title>{titles.order}</title>
      </Helmet>
      <Navbar />
      <h2 className="favory_font_h2">Sifarişlərim</h2>
      <div className="orderitems_container">
        <div className="grid_container_orderitmes">
          {isLoading ? (
            <p className="favory_font_h2">Yüklənir...</p>
          ) : myOrderItemsValue.length === 0 ? (
            <p className="myorder_empty_array" style={{ fontSize: "2.6rem" }}>
              Siz hələ heç bir alış etməmisiniz.
            </p>
          ) : (
            myOrderItemsValue.map((data, i) => {
              return <MyOrdersItems key={i} orderItems={data} />;
            })
          )}
        </div>
      </div>
      <h4 className="favory_font_h2" style={{ color: "#a7a7a7" }}>
        TƏSLİMAT ÜÇÜN ÜNVAN BİLGİLƏRİ
      </h4>

      <div className="visit_cart_user_inorderitems">
        <div className="h3_span_inuser">
          <h3>Ad/Soyad: </h3>
          <span>
            {addressData.first_name} {addressData.last_name}
          </span>
        </div>
        <div className="h3_span_inuser">
          <h3>Email: </h3>
          <span>{addressData.email}</span>
        </div>
        <div className="h3_span_inuser">
          <h3>Telefon: </h3>
          <span>{addressData.phone_number}</span>
        </div>
        <div className="h3_span_inuser">
          <h3>Ünvan: </h3>
          <span>{addressData.address}</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyOrders;
