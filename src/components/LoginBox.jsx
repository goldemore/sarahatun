import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const pswChange = (e) => {
    setPsw(e.target.value);
  };

  const logsub = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: psw,
    };
    localStorage.setItem('loggedUserEmail', email)

    axios({
      method:'POST',
      url:'https://derzi.pythonanywhere.com/api/token/',
    data,
    
    })
    .then(resp=>{
      console.log(resp);
      localStorage.setItem('ACCESS_TOKEN', resp.data.access)
      
    })
    .catch(err=>{
      console.log(err);
    })
  };

  return (
    <div className="login_register_container">
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
            <span className="error">Şifrə boş qoyula bilməz.</span>
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
    </div>
  );
};

export default LoginBox;
