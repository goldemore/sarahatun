import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../action/MainAction";

const LoginBox = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [spanErr, setSpanErr] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const pswChange = (e) => {
    setPsw(e.target.value);
  };

  const usersList = useSelector((state) => state.Data.usersList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  const logsub = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: psw,
    };
    const findUser = usersList.find((x) => x.email === email);
    setIsLoading(true);
    try {
      const resp = await axios.post(
        "https://derzi.pythonanywhere.com/api/token/",
        data
      );
      console.log(resp);
      if (resp.status === 200) {
        localStorage.setItem("ACCESS_TOKEN", resp.data.access);
        localStorage.setItem("userID", findUser.id);
        window.location.href = "/";
      }
      console.log(findUser);
    } catch (error) {
      console.log(error);
      setSpanErr("* Məlumatlar Yalnışdır");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login_register_container">
      {isLoading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div className="login_box">
          <h1 className="login_header">Daxil Ol</h1>
          <form onSubmit={logsub}>
            <div>
              <input
                value={email}
                onChange={emailChange}
                type="email"
                placeholder="E-poçt"
                required
              />
            </div>
            <div>
              <input
                value={psw}
                onChange={pswChange}
                type="password"
                placeholder="Şifrə"
                required
              />
              <span className="error">{spanErr}</span>
            </div>
            <button>Daxil ol</button>
            <span className="go_to_register">
              Hesabınız yoxdur?
              <Link to="/register" className="link_text">
                Qeydiyyatdan keç
              </Link>
            </span>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginBox;
