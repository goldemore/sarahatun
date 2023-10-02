import React from "react";

const AlotOfImgBox = ({dataImgs, onClick}) => {

  return (
    <div className="_img_boxs" onClick={onClick}>
      <img src={dataImgs.image} alt=""/>
    </div>
  );
};

export default AlotOfImgBox;
