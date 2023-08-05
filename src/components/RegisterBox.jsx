import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const RegisterBox = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [emailErr, setEmailErr] = useState("");
  const [spamPswErr, setPswErr] = useState("");

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
    setEmailErr("");
    setPswErr("");

    axios
      .get("https://derzi.pythonanywhere.com/api/account/user-list/")
      .then((resp) => {
        console.log(resp);
        let userList2 = resp.data;
        let checkUser = userList2.find((data) => data.email === email);
        if (checkUser) {
          setEmailErr("* Bu email artıq qeydiyyatdan keçib");
          console.log(psw, rPsw);
        }
        if (psw !== rPsw) {
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
                  title: "Qeydiyyat uğurla həyata keçdi",
                  icon: "success",
                  html: `Daxil olmaq üçün login və şifrənizi, <a href="/login">Login</a> keçid edərək daxil edin `,
                  showCloseButton: true,
                });
              }
            })
            .catch((err) => {
              console.log(err);
              setIsLoading(false);
            });
          // }
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

            <span className="error">{emailErr}</span>
          </div>
          <div>
            <input
              value={tel}
              onChange={telChange}
              type="tel"
              placeholder="Əlaqə nömrəsi 0555555555"
              required
              pattern="\d{3}\d{7}"
              title="Əlaqə nömrəsi doğru formatda olmalıdır. 0515555555"
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
