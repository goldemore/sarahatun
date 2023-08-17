import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RegisterBox from "../components/RegisterBox";
import titles from "./titles/titles";

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>{titles.register}</title>
      </Helmet>
      <Navbar />
      <RegisterBox />
      <Footer />
    </div>
  );
};

export default Register;
