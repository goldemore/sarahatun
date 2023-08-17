import React from "react";
import { useSelector } from "react-redux";
import BasketBoxSecond from "./BasketBoxSecond";

const BasketBox = () => {
  const basket = useSelector((state) => state.Data.basket);

  return (
    <>
      {basket.map((data, i) => {
        return <BasketBoxSecond key={i} data={data} />;
      })}
    </>
  );
};

export default BasketBox; 
