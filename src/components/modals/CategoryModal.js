import React from "react";
import CategoryModalContent from "./CategoryModalContent";

const CategoryModal = ({
  dataCategory,
  selectedCategories,
  setSelectedCategories,
}) => {
  return (
    <>
      <div className="_choise_modal_list" style={{ userSelect: "none" }}>
        {dataCategory.map((data, i) => {
          return (
            <CategoryModalContent
              key={i}
              data={data}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          );
        })}
      </div>
    </>
  );
};

export default CategoryModal;
