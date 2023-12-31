import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../action/MainAction";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const ProductCartBox = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  const getProductsListValue = useSelector(
    (state) => state.Data.getProductsListValue
  );

  return (
    <div className="similar_products_container">
      <h2 className="similar_head">Daha Çox Məhsullar</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        speed={1000}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1140: {
            slidesPerView: 6,
            slidesPerGroup: 2,
          },
          980: {
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
          800: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          567: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          380: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        className="mySwiper"
      >
        {getProductsListValue.map((data, i) => (
          <SwiperSlide key={i}>
            <Link to={`#/product/${data.id}`} target="_blank">
              <div className="similar_product_box">
                <img src={data.image} alt="img" />
                <div className="grid_box_content">
                  <p className="title">{data.title}</p>
                  {data.sale_price ? (
                    <div>
                      <del className="price_del">
                        <span>{data.price} AZN</span>
                      </del>
                      <span className="price">{data.sale_price} AZN</span>
                    </div>
                  ) : (
                    <span className="price">{data.price} AZN</span>
                  )}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCartBox;
