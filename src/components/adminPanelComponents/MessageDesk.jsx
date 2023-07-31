import React from "react";
import { Link } from "react-router-dom";

const MessageDesk = () => {
 

  return (
    <div className="columns_table">
      <div className="columns_table2">
        <div className="columns_tables2_src">
          <h2>Məktublar (ContactForm)</h2>
          <div className="search">
            <span>Axtarış</span>
            <input type="text" />
          </div>
        </div>

        <table
          style={{
            borderSpacing: "0",
            background: "white",
            marginLeft: "30px",
          }}
        >
          <thead align="center">
            <tr align="center">
              <th align="center">#</th>
              <th align="center">Ad/Soyad</th>
              <th align="center">Email</th>
              <th align="center">Əlaqə nömrəsi</th>
              <th align="center">Mesaj</th>
              <th align="center">Status</th>
              <th align="center">Oxu</th>
              <th align="center">Sil</th>
            </tr>
          </thead>
          {/* First Body */}
          <tbody>
            <tr align="center">
              <td>1</td>
              <td>Mirzə Fətəli</td>
              <td>mirze@gmail.com</td>
              <td>9945000000</td>
              <td className="message_cell">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                id voluptatibus earum, facilis maiores voluptas?
              </td>
              <td>Oxunub</td>
              <td>
                <button className="products_btn" >
                  <Link to={'/messagereading'}> Bax <i className="fa-regular fa-eye"></i> </Link>
                </button>
              </td>

              <td>
                <button
                  className="products_btn"
                  style={{ backgroundColor: "rgb(207 105 105)" }}
                >
                  Sil<i className="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageDesk;
