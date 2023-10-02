import { useEffect, useState } from "react";
import { getCategoryList, getProductsList } from "../action/MainAction";
import { useDispatch, useSelector } from "react-redux";
import ProductsGridBox from "./ProductsGridBox";
import CategoryModal from "./modals/CategoryModal";
import SearchResult from "./SearchResult";

import {BiFilterAlt} from 'react-icons/bi'

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsList());
    dispatch(getCategoryList());
  }, [dispatch]);

  const getProductsListValue = useSelector(
    (state) => state.Data.getProductsListValue
  );
  const categoryListValue = useSelector(
    (state) => state.Data.categoryListValue
  );

  console.log(getProductsListValue);

  const [isOpen, setIsOpen] = useState(false);

  const modalOpenClose = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen);
  };
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts =
    selectedCategories.length === 0
      ? getProductsListValue
      : getProductsListValue.filter((data) =>
          data.categories.some((cat) => selectedCategories.includes(cat.id))
        );

  const [inp, setInp] = useState("");

  const resultsTitle = getProductsListValue.filter((data) => {
    return (inp && data && data.title && data.title.toLowerCase().includes(inp.toLowerCase()));
  });

  const resultCategory = getProductsListValue.filter((data) => {
    return (
      data &&
      data.categories.some((category) =>
        category.name.toLowerCase().includes(inp.toLowerCase())
      )
    );
  });

  const searchInp = (value) => {
    setInp(value);
  };
  console.log(inp);
  console.log(resultsTitle);
  console.log(resultCategory);
  
  return (
    <main>
      <h2 className="main_header" id="mehsullarimiz">
        Məhsullarımız
      </h2>

      <div className="main_container">
        <div className="category_checkbox">
            <CategoryModal
              dataCategory={categoryListValue}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
        </div>

      <div>
        <div className="search_and_catecory">
          <div className="seach_and_cat_cont">
            <div className="search_inp_products">
              <input
                type="search"
                placeholder="Axtarıram..."
                value={inp}
                onChange={(e) => searchInp(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {inp && <SearchResult resultsTitle={resultsTitle} />}
          </div>
          <div onClick={modalOpenClose} className="category_choise_modal">
            <p style={{ userSelect: "none" }}>
              Kateqoriya
            </p>
            <BiFilterAlt/>
            {isOpen && (
              <CategoryModal
                dataCategory={categoryListValue}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
            )}
          </div>
        </div>

          <div className="grid_container">
            {!isOpen ? (
              getProductsListValue.length !== 0 ? (
                filteredProducts.map((data, i) => (
                  <ProductsGridBox key={i} dataProducts={data} />
                ))
              ) : (
                <h3 className="when_notmy_favourites">Yüklənir...</h3>
              )
            ) : filteredProducts.length !== 0 ? (
              filteredProducts.map((data, i) => (
                <ProductsGridBox key={i} dataProducts={data} />
              ))
            ) : (
              <h3 className="when_notmy_favourites">
                Təəsüfki bu kategoriyada mal yoxdur :(
              </h3>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
