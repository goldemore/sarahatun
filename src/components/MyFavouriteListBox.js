import React, { useEffect } from "react";
import { getMyFavoriteList } from "../action/MainAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const MyFavouriteListBox = ({ dataFavList }) => {
  const dispatch = useDispatch();
  console.log(dataFavList);
  const getMyFavoriteListValue = useSelector(
    (state) => state.Data.getMyFavoriteListValue
  );

  useEffect(() => {
    dispatch(getMyFavoriteList());
  }, [dispatch]);
  const openNewWindow = (e) => {
    if (
      !e.target.classList.contains("del_for_myfavorite") &&
      !e.target.classList.contains("fa-xmark")
    ) {
      window.open(`/product/${dataFavList.id}`, "_blank");
    }
  };

  const removeFavorite = async (id) => {
    console.log(id);
    const checkItem = getMyFavoriteListValue.find(
      (data) => data.product === id
    );
    console.log(checkItem);
    await axios({
      method: "DELETE",
      url: `https://derzi.pythonanywhere.com/api/tailor/favourite-retrieve-update-delete/${checkItem.id}/`,
    })
      .then((resp) => {
        console.log(resp);
        if (resp.status === 204) {
          dispatch(getMyFavoriteList());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid_box_favorite_cart" onClick={openNewWindow}>
      <div
        className="del_for_myfavorite"
        onClick={() => removeFavorite(dataFavList.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
      <img src={dataFavList.image} alt={dataFavList.title} />
      <div className="grid_box_content">
        <p className="title">{dataFavList.title}</p>

        {dataFavList.sale_price ? (
          <div>
            <del className="price_del">
              <span>{dataFavList.price} AZN</span>
            </del>
            <span className="price">{dataFavList.sale_price} AZN</span>
          </div>
        ) : (
          <span className="price">{dataFavList.price} AZN</span>
        )}
      </div>
    </div>
  );
};

export default MyFavouriteListBox;
