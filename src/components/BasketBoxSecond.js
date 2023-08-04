import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch} from "react-redux";
import { decr, delitem, incr } from "../redux/MainReducer";

const BasketBoxSecond = ({ data }) => {
  const dispatch = useDispatch();


  return (
    <div className="left_side">
      <div className="b_img">
        <img src={data.image} alt="" />
      </div>
      <div className="left_side_content">
        <div className="item_info">
          <p className="category">{data.title}</p>
          <div className="color_size">
            <p>
              Rəng: <span>Boz</span>
            </p>
            <p>
              Ölçü: <span>M</span>
            </p>
          </div>
        </div>
        <div className="b_buttons">
          <button onClick={() => dispatch(decr(data))}>-</button>
          <span>{data.quantity}</span>
          <button onClick={() => dispatch(incr(data))}>+</button>
        </div>
        <div className="b_price">
          <span>{data.sale_price * data.quantity} AZN</span>
        </div>
        <div className="trash">
          <BsTrash onClick={() => dispatch(delitem(data))} />
        </div>
      </div>
    </div>
  );
};

export default BasketBoxSecond;
