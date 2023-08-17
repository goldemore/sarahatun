import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMyOrderID } from "../action/MainAction";
import axios from "axios";

const UserInfoModal = ({ setIsOPen, isOpen, dataMyAddress }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [nameValue, setNameValue] = useState(dataMyAddress.first_name);
  const [lastNameValue, setLastNameValue] = useState(dataMyAddress.last_name);
  const [emailValue, setEmailValue] = useState(dataMyAddress.email);
  const [numberValue, setNumberValue] = useState(dataMyAddress.phone_number);
  const [addressValue, setAddressValue] = useState(dataMyAddress.address);
  const [noteValue, setNoteValue] = useState("");

  const nameChange = (e) => {
    setNameValue(e.target.value);
  };
  const lNameChange = (e) => {
    setLastNameValue(e.target.value);
  };
  const emailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const numberChange = (e) => {
    setNumberValue(e.target.value);
  };
  const adressChange = (e) => {
    setAddressValue(e.target.value);
  };
  const noteChange = (e) => {
    setNoteValue(e.target.value);
  };

  const changeUserInfo = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      id: dataMyAddress.id,
      first_name: nameValue,
      last_name: lastNameValue,
      email: emailValue,
      phone_number: numberValue,
      address: addressValue,
      note: noteValue,
      user: Number(localStorage.getItem("userID")),
    };
    await axios({
      method: "PUT",
      url: `https://derzi.pythonanywhere.com/api/tailor/order-retrieve-update-delete/${dataMyAddress.id}/`,
      data,
    })
      .then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          dispatch(getMyOrderID());
          setIsOPen(false);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isOpen && (
        <div className="info_modal_container">
          <div className="info_modal_card">
            <div className="info_header">
              <p className="info_modal_head">
                *Yalnız ünvanı yeniləyə bilərsiniz, əlavə məlumatı zəhmət olmasa
                qeyd bölməsinə daxil edin
              </p>
              <div className="info_xmarkx" onClick={() => setIsOPen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <form onSubmit={changeUserInfo} className="info_inputs">
              <div>
                <input
                  value={nameValue}
                  onChange={nameChange}
                  type="text"
                  placeholder="Ad"
                  required
                  disabled
                />
              </div>
              <div>
                <input
                  value={lastNameValue}
                  onChange={lNameChange}
                  type="text"
                  placeholder="Soyad"
                  required
                  disabled
                />
              </div>
              <div>
                <input
                  value={emailValue}
                  onChange={emailChange}
                  type="email"
                  placeholder="E-poçt"
                  required
                  disabled
                />
              </div>
              <div>
                <input
                  value={numberValue}
                  onChange={numberChange}
                  type="tel"
                  placeholder="Əlaqə nömrəsi"
                  required
                  disabled
                />
              </div>
              <div>
                <textarea
                  value={addressValue}
                  onChange={adressChange}
                  placeholder="Ünvan"
                  required
                ></textarea>
              </div>
              <div>
                <textarea
                  style={{ height: "40px" }}
                  value={noteValue}
                  onChange={noteChange}
                  placeholder="Qeyd"
                ></textarea>
              </div>
              <button>
                {isLoading ? <span className="loader"></span> : "Yenilə"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfoModal;
