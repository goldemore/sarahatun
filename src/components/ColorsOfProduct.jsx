import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorSelection} from "../redux/MainReducer";

const ColorsOfProduct = ({ dataColor}) => {
 const dispatch=useDispatch()
 const colorValue = useSelector(state=>state.Data.colorValue) 
  return (
    <li
      style={{ background: `${dataColor.color_code}`,
               padding:"5px",
               border: colorValue.color===dataColor.color ? "2px solid black":''  }} 
      title={dataColor.color}
      onClick={()=>dispatch(colorSelection(dataColor))} 
    ></li>
  );
};

export default ColorsOfProduct;
