import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FavoritesBox from "../components/FavoritesBox";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import titles from "./titles/titles";

const Favourites = () => {
  if (!localStorage.getItem("ACCESS_TOKEN")) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Helmet>
        <title>{titles.favourite} </title>
      </Helmet>
      <Navbar />
      <FavoritesBox />
      <Footer />
    </div>
  );
};

export default Favourites;
