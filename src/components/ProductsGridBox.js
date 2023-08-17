import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyFavoriteList } from "../action/MainAction";
import axios from "axios";
import Swal from "sweetalert2";


const ProductsGridBox = ({ dataProducts }) => {
  const dispatch = useDispatch();
  const getMyFavoriteListValue = useSelector(
    (state) => state.Data.getMyFavoriteListValue
  );

  useEffect(() => {
    dispatch(getMyFavoriteList());
  }, [dispatch]);

  const checkItem = getMyFavoriteListValue.find(
    (data) => data.product === dataProducts.id
  );
 
  const loggedInUser = useSelector((state) => state.Data.loggedInUser);

  const addRemoveFavorite = async (id) => {
    console.log(checkItem);

    if (Object.keys(loggedInUser).length === 0) {
     window.location.href="#/login"
    } else {
      if (!checkItem) {
        const data = {
          user: Number(localStorage.getItem("userID")),
          product: id,
        };
        await axios({
          method: "POST",
          url: "https://derzi.pythonanywhere.com/api/tailor/favourite-create/",
          data,
        })
          .then((resp) => {
            console.log(resp);
            if (resp.status === 201) {
              dispatch(getMyFavoriteList());

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Uğurla favorilərimə əlavə olundu",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        await axios({
          method: "DELETE",
          url: `https://derzi.pythonanywhere.com/api/tailor/favourite-retrieve-update-delete/${checkItem.id}/`,
        })
          .then((resp) => {
            console.log(resp);
            if (resp.status === 204) {
              dispatch(getMyFavoriteList());

              // console.log(getFavoriteListValue);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const openNewWindow = (e) => {
    if (
      !e.target.classList.contains("heart_for_favorite") &&
      !e.target.classList.contains("fa-heart")
    ) {
      window.open(`#/product/${dataProducts.id}`, "_blank");
    }
  };

  return (
    <div className="grid_box" onClick={openNewWindow}>
      <div
        className="heart_for_favorite"
        onClick={() => addRemoveFavorite(dataProducts.id)}
      >
        <i
          className={checkItem ? "fa-solid fa-heart" : "fa-regular fa-heart"}
        ></i>
      </div>

      <img src={dataProducts.image} alt="img" />
      <div className="grid_box_content">
        <p className="title">{dataProducts.title}</p>

        {dataProducts.sale_price ? (
          <div>
            <del className="price_del">
              <span>{dataProducts.price} AZN</span>
            </del>
            <span className="price">{dataProducts.sale_price} AZN</span>
          </div>
        ) : (
          <span className="price">{dataProducts.price} AZN</span>
        )}
      </div>
    </div>
  );
};

export default ProductsGridBox;
