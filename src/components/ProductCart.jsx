import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRetrieveProduct } from "../action/MainAction";

import { addToCart } from "../redux/MainReducer";

const ProductCart = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRetrieveProduct(id));
  }, [dispatch, id]);

  const dataPr = useSelector((state) => state.Data.getRetriveProductValue);

  console.log(dataPr);

  return (
    <div className="p_container">
      <div className="p_box">
        <div className="p_img">
          <img src={dataPr.image} alt="" />
        </div>
        <div className="p_content">
          <h3>{dataPr.title}</h3>
          <p className="p_price">{dataPr.sale_price} AZN</p>
          <p className="content_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            voluptatibus deleniti, repellendus quos laudantium ullam rem natus
            fugiat nobis quae?
          </p>
          <div>
            <p className="color">Rəng:</p>
            <ul className="p_color">
              <li title="violet"></li>
              <li title="qırmızı"></li>
              <li title="yaşıl"></li>
            </ul>
          </div>
          <div>
            <p className="size">Ölçü:</p>
            <ul className="p_size">
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>2XL</li>
            </ul>
          </div>
          <div className="basket">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1L1.5 3V10C1.5 10.2652 1.60536 10.5196 1.79289 10.7071C1.98043 10.8946 2.23478 11 2.5 11H9.5C9.76522 11 10.0196 10.8946 10.2071 10.7071C10.3946 10.5196 10.5 10.2652 10.5 10V3L9 1H3Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 3H10.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 5C8 5.53043 7.78929 6.03914 7.41421 6.41421C7.03914 6.78929 6.53043 7 6 7C5.46957 7 4.96086 6.78929 4.58579 6.41421C4.21071 6.03914 4 5.53043 4 5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <button
              className="add_to_card"
              onClick={() => dispatch(addToCart(dataPr))}
            >
              Səbətə əlavə et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;