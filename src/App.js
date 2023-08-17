
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Basket from "./pages/Basket";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Payment from "./components/Payment";
import Favourites from "./pages/Favourites";
import AddressPayment from "./components/AddressPayment";
import Myorders from "./pages/Myorders";

export default function App() { 
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/myfavourites" element={<Favourites />} />
        <Route path="/myorders" element={<Myorders />} />
        <Route path="/basket/payment" element={<AddressPayment />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}
