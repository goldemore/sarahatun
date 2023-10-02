import React from "react";
import { Link } from "react-router-dom";

const MyOrdersItems = ({ orderItems }) => {
  console.log(orderItems);

  return (
    // style={{display:"flex", justifyContent:"space-between"}}
    
    <div className="orderitems_container_content">
      <div className="oc_con_img">
        <img src={orderItems.product.image} alt="" />
      </div>
      <div>
        <div className="all_h4_soan_p">
          <h4>
            {orderItems.product.title}{" "}
            <i>
              <span style={{ fontSize: "1.2rem", color: "#9f9f9f" }}>
                {orderItems.product.categories[0].name}
              </span>
            </i>
          </h4>

          <div className="under_category_p">
            <p>Ölçü: {orderItems.size}, </p>
            <p>Rəng: {orderItems.color}, </p>
            <p>Ədəd: {orderItems.quantity}</p>
          </div>
          {orderItems.product.sale_price ? (
            <div style={{ marginTop: "5px" }}>
              <del className="price_del">
                <span>{orderItems.product.price} AZN</span>
              </del>
              <span className="price">{orderItems.product.sale_price} AZN</span>
            </div>
          ) : (
            <span className="price">{orderItems.product.price} AZN</span>
          )}
        </div>
        <div className="goto_singlepage_gromoritems">
          <Link to={`/product/${orderItems.product.id}`} target="_blank">
            Məhsula bax
          </Link>
        </div>
      </div>
    </div>
    
  )
};

export default MyOrdersItems;
