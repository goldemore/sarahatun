import React from "react";

const SearchResultMap = ({ data }) => {
  const test = () => {
    window.open(`/product/${data.id}`);
  };
  return <div onClick={test}>{data.title}</div>;
};

export default SearchResultMap;
