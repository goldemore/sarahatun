import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegisterBox = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setRegName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [psw, setPsw] = useState("");
  const [rPsw, setRpsw] = useState("");

  const nameChange = (e) => {
    setRegName(e.target.value);
  };

  const lastNaChange = (e) => {
    setLastName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const telChange = (e) => {
    setTel(e.target.value);
  };

  const pswChange = (e) => {
    setPsw(e.target.value);
  };

  const rPswChange = (e) => {
    setRpsw(e.target.value);
  };

  const regSubmit = async (e) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: tel,
      password: psw,
    };
    console.log(data);

    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://derzi.pythonanywhere.com/api/account/user-create/",
        data
      );
      console.log(res);
    } catch (error) {
      console.log(error);
      // Handle errors
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login_register_container">
      <div className="register_box">
        <h1 className="register_header">Qeydiyyat</h1>

        <form onSubmit={regSubmit}>
          <div>
            <input
              value={firstName}
              onChange={nameChange}
              type="text"
              placeholder="Ad"
              required
            />
          </div>
          <div>
            <input
              value={lastName}
              onChange={lastNaChange}
              type="text"
              placeholder="Soyad"
              required
            />
          </div>
          <div>
            <input
              value={email}
              onChange={emailChange}
              type="email"
              placeholder="E-poçt"
              required
            />
            <span className="error">Email boş qoyula bilməz.</span>
          </div>
          <div>
            <input
              value={tel}
              onChange={telChange}
              type="tel"
              placeholder="Əlaqə nömrəsi (051)555-55-55"
              required
            />
          </div>
          <div className="eye_psw">
            <input
              value={psw}
              onChange={pswChange}
              type={showPassword ? "text" : "password"}
              placeholder="Şifrə"
              required
            />
            <i
              className={`fa-regular fa-eye${showPassword ? "-slash" : ""}`}
              onClick={toggleShowPassword}
            ></i>
          </div>
          <div>
            <input
              value={rPsw}
              onChange={rPswChange}
              type="password"
              placeholder="Şifrəni təkrarla"
              required
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              "Qeydiyyatdan keç"
            )}
          </button>
          <span className="go_to_login">
            Hesabınız var?
            <Link to="/login" className="link_text">
              Daxil ol
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default RegisterBox;
