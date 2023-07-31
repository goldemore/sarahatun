import React, { useState } from "react";

const OrderDesk = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
    <div className="columns_table">
      <div className="columns_table2">
        <div className="columns_tables2_src">
          <h2>Sifarişlər</h2>
          <div className="search">
            <span>Axtarış</span>
            <input type="text" />
          </div>
        </div>

        <table style={{ borderSpacing: "0", background: "white", marginLeft:'30px' }}>
          <thead align="center">
            <tr align="center">
              <th align="center">#</th>
              <th align="center">Sifariş №</th>
              <th align="center">Ad/Soyad</th>
              <th align="center">Ünvan</th>
              <th align="center">Əlaqə</th>
              <th align="center">Sifariş tarixi</th>
              <th align="center">Ümumi say</th>
              <th align="center">Status</th>
              <th align="center">Məhsullar</th>
              <th align="center">Arxiv</th>
            </tr>
          </thead>
          {/* First Body */}
          <tbody>
            <tr align="center">
              <td>1</td>
              <td>A0001</td>
              <td>Lev Tolstoy</td>
              <td>
                Nərimanov ray. <br /> Aşıq Molla Cümə küç 25
              </td>
              <td>
                +99450-000-00-00 <br /> defender@gmail.com
              </td>
              <td>
                10/07/2023
                <br /> 00:00:00
              </td>
              <td>3</td>
              <td>
                <label className="checkbox-ya">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                  <span className="checkbox-ya-switch">
                    <span
                      className="checkbox-ya-feature"
                      data-label-on="Çatdırılıb"
                      data-label-off="Gözləyir"
                    ></span>
                  </span>
                </label>
              </td>
              <td><button className="products_btn">Məhsullar<span>(0)</span></button></td>
              <td><button className="products_btn" style={{backgroundColor: "rgb(207 105 105)"}}>Arxivləşdir</button></td>
            </tr>
          </tbody>
          {/* Second Body */}
          <tbody>
            <tr align="center">
              <td>2</td>
              <td>A0002</td>
              <td>Lev Tolstoy</td>
              <td>
                Nərimanov ray. <br /> Aşıq Molla Cümə küç 25
              </td>
              <td>
                +99450-000-00-00 <br /> defender@gmail.com
              </td>
              <td>
                10/07/2023
                <br /> 00:00:00
              </td>
              <td>3</td>
              <td>
                <label className="checkbox-ya">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                  <span className="checkbox-ya-switch">
                    <span
                      className="checkbox-ya-feature"
                      data-label-on="Çatdırılıb"
                      data-label-off="Gözləyir"
                    ></span>
                  </span>
                </label>
              </td>
              <td><button className="products_btn">Məhsullar<span>(0)</span></button></td>
              <td><button className="products_btn" style={{backgroundColor: "rgb(207 105 105)"}}>Arxivləşdir</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
    </>
    );
};

export default OrderDesk;
