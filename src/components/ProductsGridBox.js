import React from "react";
import { Link } from "react-router-dom";

const ProductsGridBox = ({ dataProducts }) => {
  
  return (
    <Link to={`/product/${dataProducts.id}`} target="_blank">
      <div className="grid_box">
        <img src={dataProducts.image} alt="img" />
        <div className="grid_box_content">
          <p className="title">{dataProducts.title}</p>
          {dataProducts.discount ? (
            <del className="price_del">
              <span>{dataProducts.price} AZN</span>
            </del>
          ) : (
            <span className="price">{dataProducts.price} AZN</span>
          )}
          {dataProducts.discount && (
            <span className="price_discount">
              {dataProducts.sale_price} AZN
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductsGridBox;
