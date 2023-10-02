import React from "react";
import SearchResultMap from "./SearchResultMap";

const SearchResult = ({ resultsTitle }) => {
  console.log(resultsTitle);
  return (
    <div
      style={{
        background: "white",
        width: "140px",
        maxHeight: "200px",
        overflowY: "scroll",
        position: "absolute",
        zIndex: 9,
        border: "1px solid #878787",
        padding: "5px"
      }}
    >
      {resultsTitle.map((data, i) => {
        return <SearchResultMap data={data} key={i} />;
      })}
    </div>
  );
};

export default SearchResult;
