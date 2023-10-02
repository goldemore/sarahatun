import React, { useState } from "react";
import { BsFillPinMapFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FcPhone } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import axios from "axios";
import Swal from "sweetalert2";


const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);


  const [name, setName] = useState("");
  const [email, setLastemail] = useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setLastemail(e.target.value);
  };
  const telChange = (e) => {
    setTel(e.target.value);
  };
  const textChange = (e) => {
    setText(e.target.value);
  };

  const messageSub = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || tel === "" || text === "") {
      Swal.fire({
        icon: "error",
        title: "Zəhmət olmasa bütün xanaları doldurun",
        text: "",
        timer: 2000,
      });
    } else {
      setIsLoading(true);
      const data = {
        name: name,
        email: email,
        phone_number: tel,
        message: text,
      };
      axios
        .post(
          "https://derzi.pythonanywhere.com/api/account/message-create/",
          data
        )
        .then((resp) => {
          console.log(resp);
          setIsLoading(false);
          if (resp.status === 201) {
            Swal.fire({
              icon: "success",
              title: "Mesajınız uğurla göndərildi",
              text: "",
              timer: 2000,
            });

            setName("");
            setLastemail("");
            setTel("");
            setText("");
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="contact_container">
      <h1>Bizimlə əlaqə</h1>
      <div className="contact_content">
        <div className="contact_left">
          <div className="contact_box">
            <BsFillPinMapFill className="box_icon" />
            <div>
              <h2>Ünvan</h2>
              <p>3891 Ranchview Dr. Richardson, California 62639</p>
            </div>
          </div>
          <div className="contact_box">
            <HiOutlineMail className="box_icon" />
            <div>
              <h2>Email</h2>
              <p>info@derzi.az</p>
            </div>
          </div>
          <div className="contact_box">
            <FcPhone className="box_icon" />
            <div>
              <h2>Telefon</h2>
              <p>0125555555</p>
            </div>
          </div>
          <div className="contact_box">
            <FcCalendar className="box_icon" />
            <div>
              <h2>İş saatları</h2>
              <p>
                Bazar Ertəsi-Şənbə: <br />
                10:00-dan - 19:00-dək
              </p>
            </div>
          </div>
        </div>

        <form className="contact_form" onSubmit={messageSub}>
          <h2>Sualınız var? Bizə yazın</h2>
          <div className="contact_flex">
            <label htmlFor="name"> 
              <input
                id="name"
                value={name}
                onChange={nameChange}
                type="text"
                placeholder="Ad/Soyad"
              />
            </label>
          </div>
          <div className="contact_flex">
            <label htmlFor="phone">
              {" "}
              <input
                id="phone"
                value={tel}
                onChange={telChange}
                type="tel"
                placeholder="Telefon"
              />
            </label>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={emailChange}
              required
            />
          </div>
          <textarea
            value={text}
            onChange={textChange}
            placeholder="Mesaj"
            cols="30"
            rows="6"
          ></textarea>

          <button className="contact_btn">
            {isLoading ? <span className="loader"></span> : "Göndər"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
