import React from "react";
import { Link } from "react-router-dom";

const ProductsGridBox = ({ dataProducts }) => {
  return (
    <Link to={`/product/${dataProducts.id}`} target="_blank">
      <div className="grid_box">
        <img src={dataProducts.image} alt="img" />
        <div className="grid_box_content">
          <p className="title">{dataProducts.title}</p>

          {dataProducts.sale_price ? (
            <div>
              <del className="price_del">
                <span>{dataProducts.price}.00 AZN</span>
              </del>
              <span className="price">{dataProducts.sale_price}.00 AZN</span>
            </div>
          ) : (
            <span className="price">{dataProducts.price}.00 AZN</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductsGridBox;
