import React, { useState } from "react";
import UserInfoModal from "./UserInfoModal";

const VisitCartOfUser = ({ dataMyAddress }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="visit_cart_user ">
      <div className="h3_span_inuser">
        <h3>Ad/Soyad: </h3>
        <span>
          {dataMyAddress.first_name} {dataMyAddress.last_name}
        </span>
      </div>
      <div className="h3_span_inuser">
        <h3>Email: </h3>
        <span>{dataMyAddress.email}</span>
      </div>
      <div className="h3_span_inuser">
        <h3>Telefon: </h3>
        <span>{dataMyAddress.phone_number}</span>
      </div>
      <div className="h3_span_inuser">
        <h3>Ünvan: </h3>
        <span>{dataMyAddress.address}</span>
      </div>

      <button onClick={()=>setIsOpen(true)} style={{ width: "150px" }} className="change_user_info_btn">
        Ünvanı Dəyiş
      </button>
      <UserInfoModal setIsOPen={setIsOpen} isOpen={isOpen} dataMyAddress={dataMyAddress}  />
    </div>
  );
};

export default VisitCartOfUser;
