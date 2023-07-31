import React, { useState } from "react";

const AdminPanHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ad_pan_head">
      <div className="ad_pan_head_content" onClick={handleClick}>
        <div className="fa-user_circle ad_pan_head_user">
          <i className="fa-regular fa-user"></i>
        </div>
        <span>
          İstifadəçi <i style={{
              transform: `rotate(${isOpen ? "180deg" : "0deg"})`,
              transition: "0.4s"
            }}className="fa-solid fa-chevron-down"></i>
        </span>
        {isOpen && (
          <div className="first_pub_up">
            <div className="first_pub_up_p_i">
              <p>Sayta keçid </p>
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="first_pub_up_p_i">
              <p>Log Out </p>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanHeader;
