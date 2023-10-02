import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";

const RegisterBox = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const [emailErr, setEmailErr] = useState("");
  const [spamPswErr, setPswErr] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowRePassword = () => {
    setShowRePassword(!showRePassword);
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
    setEmailErr("");
    setPswErr("");

    await axios
      .get("https://derzi.pythonanywhere.com/api/account/user-list/")
      .then((resp) => {
        console.log(resp);
        let userList2 = resp.data;
        let checkUser = userList2.find((data) => data.email === email);
        if (checkUser) {
          setEmailErr("* Bu email artıq qeydiyyatdan keçib");
          console.log(psw, rPsw);
        } else if (psw !== rPsw) {
          setPswErr("* Şifrələr eyni deyil");
        } else {
          setIsLoading(true);
          const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: tel,
            password: psw,
          };
          axios
            .post(
              "https://derzi.pythonanywhere.com/api/account/user-create/",
              data
            )
            .then((resp) => {
              console.log(resp);
              setIsLoading(false);
              if (resp.status === 201) {
                Swal.fire({
                  title: `Qeydiyyat uğurla həyata keçdi. Daxil olmaq üçün login və şifrənizi, <a href="/login">Login</a>-ə keçid edərək daxil edin`,
                  icon: "success",
                  html: ` `,
                  showCloseButton: true,
                });
              }
            })
            .catch((err) => {
              console.log(err);
              setIsLoading(false);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login_register_container">
      <div className="register_box">
        <h1 className="register_header">Qeydiyyat</h1>

        <form onSubmit={regSubmit}>
          <div>
            <label htmlFor="name">
              <input
                id="name"
                value={firstName}
                onChange={nameChange}
                type="text"
                placeholder="Ad"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="last_name">
              <input
                id="last_name"
                value={lastName}
                onChange={lastNaChange}
                type="text"
                placeholder="Soyad"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <input
                id="email"
                value={email}
                onChange={emailChange}
                type="email"
                placeholder="E-poçt"
                required
              />
            </label>

            <span className="error">{emailErr}</span>
          </div>
          <div>
            <label htmlFor="phone_number">
              <InputMask
                id="phone_number"
                value={tel}
                onChange={telChange}
                mask="+\9\94 (99) 999-99-99"
                placeholder="+994 (00) 000-00-00"
                required
              ></InputMask>
            </label>
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
          <div className="eye_psw">
            <input
              value={rPsw}
              onChange={rPswChange}
              type={showRePassword ? "text" : "password"}
              placeholder="Şifrəni təkrarla"
              required
            />
            <i
              className={`fa-regular fa-eye${showRePassword ? "-slash" : ""}`}
              onClick={toggleShowRePassword}
            ></i>
            <span className="error">{spamPswErr}</span>
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? <span className="loader"></span> : "Qeydiyyatdan keç"}
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
