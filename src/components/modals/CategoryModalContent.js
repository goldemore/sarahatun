import React from "react";

const CategoryModalContent = ({
  data,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleCategoryChange = () => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(data.id)) {
        return prevSelectedCategories.filter((catId) => catId !== data.id);
      } else {
        return [...prevSelectedCategories, data.id];
      }
    });
  };

  return (
    <label htmlFor={`category-${data.id}`}>
      <input
        type="checkbox"
        id={`category-${data.id}`}
        checked={selectedCategories.includes(data.id)}
        onChange={handleCategoryChange}
      />
      {data.name}
    </label>
  );
};

export default CategoryModalContent;
