import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyFavoriteList, getRetrieveProduct } from "../action/MainAction";

import { addToCart } from "../redux/MainReducer";
import ProductCartBox from "./ProductCartBox";

import ColorsOfProduct from "./ColorsOfProduct";
import SizesOfProduct from "./SizesOfProduct";
import axios from "axios";
import Swal from "sweetalert2";
import AlotOfImgBox from "./AlotOfImgBox";
import DOMPurify from "dompurify";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProductCart = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRetrieveProduct(id));
    dispatch(getMyFavoriteList());
  }, [dispatch, id]);

  const dataPr = useSelector((state) => state.Data.getRetriveProductValue);

  const isDataLoaded = Object.keys(dataPr).length > 0;

  const getMyFavoriteListValue = useSelector(
    (state) => state.Data.getMyFavoriteListValue
  );

  const checkItem = getMyFavoriteListValue.find(
    (data) => data.product === dataPr.id
  );

  const colorValue = useSelector((state) => state.Data.colorValue);
  const sizeValue = useSelector((state) => state.Data.sizeValue);
  const loggedInUser = useSelector((state) => state.Data.loggedInUser);

  const addRemoveFavorite = async (id) => {
    console.log(id);
    if (Object.keys(loggedInUser).length === 0) {
      window.location.href = "/login";
    } else {
      if (!checkItem) {
        const data = {
          user: Number(localStorage.getItem("userID")),
          product: id
        };
        await axios({
          method: "POST",
          url: "https://derzi.pythonanywhere.com/api/tailor/favourite-create/",
          data
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
                timer: 800
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        await axios({
          method: "DELETE",
          url: `https://derzi.pythonanywhere.com/api/tailor/favourite-retrieve-update-delete/${checkItem.id}/`
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
      }
    }
  };

  const [isSelectedImg, setIsSelectedImg] = useState("");
  useEffect(() => {
    setIsSelectedImg(isDataLoaded ? dataPr.image : "");
  }, [isDataLoaded, dataPr.image]);

  const clickImg = (imgUrl) => {
    setTimeout(() => {
      setIsSelectedImg(imgUrl);
    }, 300);
  };

  // slide of mini pictures
  let images = document.querySelector(".class_of_images");

  const prevBtn = () => {
    images.style.scrollBehavior = "smooth";
    images.scrollLeft -= 65; 
  }

  const nextBtn = () => {
    images.style.scrollBehavior = "smooth";
    images.scrollLeft += 65;
  }


  return (
    <div className="p_container">
      <div className="p_box">

        {isDataLoaded ? (
          <>
            <div className="images">
              <div className="p_img">
                <img src={isSelectedImg} alt="/" />
              </div>
              <div className="prod_img_container">
                <MdKeyboardArrowLeft size={30} onClick={prevBtn} className="prod_img_btn"/>
                <div className="class_of_images">
                  <div className="alotof_img_box" >
                    {isDataLoaded
                      ? dataPr.product_images.map((data, i) => {
                        return (
                          <AlotOfImgBox
                          key={i}
                          dataImgs={data}
                          onClick={() => clickImg(data.image)}
                          />
                          );
                        })
                        : ""}
                  </div>
                </div>
                <MdKeyboardArrowRight size={30} onClick={nextBtn} className="prod_img_btn"/>
              </div>
            </div>
            <div className="p_content">
              <div className="product_title_category">
                <h3>{dataPr.title}</h3>
                {dataPr.categories && (
                  <i>
                    <span>{dataPr.categories[0].name}</span>
                  </i>
                )}
              </div>

              <p className="p_price">
                {dataPr.sale_price ? dataPr.sale_price : dataPr.price} AZN
              </p>

              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(dataPr.characteristics)
                }}
              ></div>
              <div>
                <p className="color">Rəng:</p>
                <ul className="p_color">
                  {dataPr.colors &&
                    dataPr.colors.map((data, i) => (
                      <ColorsOfProduct key={i} dataColor={data} />
                    ))}
                </ul>
              </div>
              <div>
                <p className="size">Ölçü:</p>
                <ul className="p_size">
                  {dataPr.sizes &&
                    dataPr.sizes.map((data, i) => {
                      return <SizesOfProduct key={i} dataSizes={data} />;
                    })}
                </ul>
              </div>
              <div className="heart_add_to_basket">
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
                    onClick={() => {
                      if (!sizeValue.size || !colorValue.color) {
                        Swal.fire({
                          position: "top-end",
                          icon: "error",
                          title: "Rəng və ölçü seçin",
                          showConfirmButton: false,
                          timer: 800
                        });
                      } else {
                        dispatch(addToCart(dataPr));
                      }
                    }}
                  >
                    Səbətə əlavə et
                  </button>
                </div>
                <div
                  className="heart"
                  onClick={() => addRemoveFavorite(dataPr.id)}
                >
                  {checkItem ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Yüklənir...</p>
        )}
      </div>
      <ProductCartBox />
    </div>
  );
};

export default ProductCart;
