import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { Helmet } from "react-helmet";
import titles from "./titles/titles";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{titles.home}</title>
      </Helmet>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
