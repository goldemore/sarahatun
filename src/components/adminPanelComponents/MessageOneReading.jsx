import React from "react";
import SideBar from "./SideBar";
import AdminPanHeader from "./AdminPanHeader";
import { Link } from "react-router-dom";

const MessageOneReading = () => {
  return (
    <div>
      <SideBar />
      <AdminPanHeader />
      <div className="columns_table">
        <div className="columns_table2">
          <div className="columns_tables2_src">
            <h2>Məktublar (ContactForm)</h2>
            <div className="search">
              <button className="products_btn">
                <Link to={"/messages"}>
                  {" "}
                  Bütün Mesajlar <i className="fa-regular fa-eye"></i>{" "}
                </Link>
              </button>
            </div>
          </div>
          <p style={{marginLeft:'10px'}}>mirze@gmail.com <span>Sizə yazıb</span></p>
          <div className="mesage_content">
            <h3>Adı: <span>Mirzə Fətəli</span></h3>
            <h6>Mail: <span>mirze@gmail.com</span></h6>
            <h6>Tel: <span>9945000000</span></h6>
            <h5>Mesaj:</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                id voluptatibus earum, facilis maiores voluptas?</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MessageOneReading;
