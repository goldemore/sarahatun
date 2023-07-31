import React, { useState } from "react";

const ProductsDesk = () => {
  const [showAddContent, setShowAddContent] = useState(true);
  const [showListContent, setShowListContent] = useState(false);

  const handleAddClick = () => {
    setShowAddContent(true);
    setShowListContent(false);
  };

  const handleListClick = () => {
    setShowAddContent(false);
    setShowListContent(true);
  };
  return (
    <div className="columns_table">
      <div className="columns_table2">
        <div className="columns_tables2_src">
          <h2>Məhsullar</h2>
          <div className="search">
            <span>Axtarış</span>
            <input type="text" /> 
          </div>
        </div>
        <div style={{ marginBottom: "10px", marginLeft:'15px' }}>
          <button onClick={handleAddClick} style={{marginLeft:'15px'}}>List</button>
          <button onClick={handleListClick} style={{marginLeft:'15px'}}>Add New</button>
        </div>

        { showAddContent && <table
          style={{
            borderSpacing: "0",
            background: "white",
            marginLeft: "30px",
          }}
        >
          <thead align="center">
            <tr align="center">
              <th align="center">#</th>
              <th align="center">Şəkil</th>
              <th align="center">Başlıq</th>
              <th align="center">Qiymət</th>
              <th align="center">Endirimli qiymət</th>
              <th align="center">Ölçülər</th>
              <th align="center">Rəng</th>
              <th align="center">Şəkillər</th>
              <th align="center">Xarakteristika</th>
              <th align="center">Yenilə</th>
              <th align="center">Sil</th>
            </tr>
          </thead>
          {/* First Body */}
          <tbody>
            <tr align="center">
              <td>1</td>
              <td></td>
              <td>Malın adı</td>
              <td>18 AZN</td>
              <td>10 AZN</td>
              <td></td>
              <td></td>
              <td><button className="products_btn">Photos <span>(3)</span></button></td>
              <td><button className="products_btn">Description</button>
              </td>
              <td><button className="products_btn">Yenilə <i className="fa-regular fa-pen-to-square"></i></button>
              </td>
              <td>
                <button
                  className="products_btn" style={{ backgroundColor: "rgb(207 105 105)" }}>
                  Sil<i className="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>}

        {showListContent && <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} className="test">
          Şəkil seçin
          <input type="file"/>
          Başlıq seçin
          <input type="text" />
          Xarakteristika
          <textarea name="" id="" cols="30" rows="10">
            
          </textarea>
          Qiymət seçin
          <input type="number" />
          Qiymət seçin
          <input type="number" />
          Ölçüləri seçin
          <select>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
          </select>
          Rəng seçin
          <select>
            <option value="">Ag</option>
            <option value="">Sari</option>
            <option value="">Qara</option>
          </select>
        </div>}
      </div>
    </div>
  );
};

export default ProductsDesk;
