import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyFavoriteList, getProductsList } from "../action/MainAction";
import MyFavouriteListBox from "./MyFavouriteListBox";

const FavoritesBox = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getProductsList());
    dispatch(getMyFavoriteList())
      .then(() => setIsLoading(false)) 
      .catch(() => setIsLoading(false)); 
  }, [dispatch]);

  const getProductsListValue = useSelector(
    (state) => state.Data.getProductsListValue
  );

  const getMyFavoriteListValue = useSelector(
    (state) => state.Data.getMyFavoriteListValue
  );

  const myFavouriteList = getProductsListValue.filter((product) =>
    getMyFavoriteListValue.some((data) => data.product === product.id)
  );

  console.log(myFavouriteList);

  return (
    <div>
    <h2 className="favory_font_h2">Favorilərim</h2>
    <div className="grid_box_favorite">
      {isLoading ? (
        <p>Yüklənir...</p>
      ) : myFavouriteList.length !== 0 ? (
        myFavouriteList.map((data, i) => (
          <MyFavouriteListBox key={i} dataFavList={data} />
        ))
      ) : (
        <p className="when_notmy_favourites">
          Hal-hazırda favorilərim bölmündə bəyəndiyiniz mal yoxdur :(
        </p>
      )}
    </div>
  </div>
  );
};

export default FavoritesBox;
