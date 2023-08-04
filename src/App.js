
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Basket from "./pages/Basket";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Payment from "./components/Payment";

export default function App() { 
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#/login" element={<Login />} />
        <Route path="#/register" element={<Register />} />
        <Route path="#/basket" element={<Basket />} />
        <Route path="#/product/:id" element={<Product />} />
        <Route path="#/contact" element={<ContactUs/>} />
        <Route path="#/payment" element={<Payment/>} />
      </Routes>
    </HashRouter>
  );
}
