import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import titles from "./titles/titles";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>{titles.contact}</title>
      </Helmet>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;
