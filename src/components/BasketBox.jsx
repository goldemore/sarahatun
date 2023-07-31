import React from "react";
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BasketBox = () => {
    return (
      <div className="b_container">
        <h2>Alış-veriş səbətim</h2>
        <div className="basket_box">
          <div className="left_side">
            <div className="b_img">
              <img src="/images/image1.png" alt="" />
            </div>
            <div className="left_side_content">
              <div className="item_info">
                <p className="category">Klassik Pencək</p>
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
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="b_price">
                <span>99.99 AZN</span>
              </div>
              <div className='trash'>
                <BsTrash/>
              </div>
            </div>
          </div>
          <div className="right_side">
            <div className="right_side_content">
              <p>
                Yekun:<span>199.98 AZN</span>
              </p>
              <Link to="/payment"><button>Sifarişi tamamla</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BasketBox;
  