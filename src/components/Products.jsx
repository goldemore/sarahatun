import { useEffect } from "react";
import { getProductsList } from "../action/MainAction";
import { useDispatch, useSelector } from "react-redux";
import ProductsGridBox from "./ProductsGridBox";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);

  const getProductsListValue = useSelector(
    (state) => state.Data.getProductsListValue
  );

  return (
    <main>
      <h2 className="main_header" id="mehsullarimiz">
        Məhsullarımız
      </h2>

      <div className="grid_container">
        {getProductsListValue.map((data, i) => {
          return <ProductsGridBox key={i} dataProducts={data} />;
        })}
      </div>
    </main>
  );
};

export default Products;
