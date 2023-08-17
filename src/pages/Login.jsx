import React from "react";
import Footer from "../components/Footer";
import LoginBox from "../components/LoginBox";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import titles from "./titles/titles";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>{titles.login}</title>
      </Helmet>
      <Navbar />
      <LoginBox />
      <Footer />
    </div>
  );
};

export default Login;
