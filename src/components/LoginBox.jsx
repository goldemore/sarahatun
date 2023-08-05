import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

  const logsub = async (e) => {
    e.preventDefault();
    setSpanErr("");

    await axios
      .get("https://derzi.pythonanywhere.com/api/account/user-list/")
      .then((resp) => {
        console.log(resp);
        let userList2 = resp.data;
        let checkUser = userList2.find((data) => data.email === email);

        if (checkUser) {
          setIsLoading(true);
          const data = {
            email: email,
            password: psw,
          };
          axios
            .post("https://derzi.pythonanywhere.com/api/token/", data)
            .then((resp) => {
              console.log(resp);
              if (resp.status === 200) {
                localStorage.setItem("ACCESS_TOKEN", resp.data.access);
                localStorage.setItem("userID", checkUser.id);
                window.location.href = "#";
              }
              setIsLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setSpanErr("* Şifrə Yalnışdır ");
              setIsLoading(false);
            });
        } else {
          setSpanErr("* Daxil etdiyiniz email və ya istifadəçi adı yanlışdır ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
