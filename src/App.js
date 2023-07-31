
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Basket from "./pages/Basket";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Payment from "./components/Payment";

import Dasboard from "./pages/Dasboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
// import Report from "./pages/Report";
import Message from "./pages/Message";
import MessageOneReading from "./components/adminPanelComponents/MessageOneReading";



export default function App() { 
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/payment" element={<Payment/>} />

        {/* Admin Panel Router dom */}
        <Route path="/adminpanel" element={<Dasboard/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/products" element={<Products/>} />
        {/* <Route path="/report" element={<Report/>} /> */}
        <Route path="/messages" element={<Message/>} />
        <Route path="/messagereading" element={<MessageOneReading/>} />
      </Routes>
    </HashRouter>
  );
}
