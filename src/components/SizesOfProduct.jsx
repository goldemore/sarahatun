import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sizeSelection } from "../redux/MainReducer";

const SizesOfProduct = ({ dataSizes }) => {
  const dispath = useDispatch();
  const sizeValue = useSelector((state) => state.Data.sizeValue);

  return (
    <li
      onClick={() => dispath(sizeSelection(dataSizes))}
      style={{
        background: sizeValue.size === dataSizes.size ? "#ddd" : "transparent",
      }}
    >
      {dataSizes.size}
    </li>
  );
};

export default SizesOfProduct;
