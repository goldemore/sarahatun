import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCart from "../components/ProductCart";
// import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Product = () => {
  const { id } = useParams();
  // const location = useLocation();
  document.title = `Sara Hatun - Product ${id}`;
  // useEffect(() => {
  // }, [id, location]);

  return (
    <div>
      <Helmet>
        <title>{`Sara Hatun - Product ${id}`}</title>
      </Helmet>
      <Navbar />
      <ProductCart />
      <Footer />
    </div>
  );
};

export default Product;
