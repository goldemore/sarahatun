import React from "react";
import SearchResultMap from "./SearchResultMap";

const SearchResult = ({ resultsTitle }) => {
  console.log(resultsTitle);
  return (
    <div
      style={{
        background: "white",
        boxShadow: "0 0 5px black",
        width: "150px",
        maxHeight: "200px",
        overflowY: "scroll",
      }}
    >
      {resultsTitle.map((data, i) => {
        return <SearchResultMap data={data} key={i} />;
      })}
    </div>
  );
};

export default SearchResult;
