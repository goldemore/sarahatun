
import data from "./data";


const Products = () => {
 
const product=()=>{
  window.open('/product')
}

  return (
    <main>
      <h2 className="main_header" id="mehsullarimiz">Məhsullarımız</h2>
      
        <div class="grid_container">
          {data.map((item, index) => (
            <div className="grid_box" key={index} onClick={product}>
                <img src={item.img} alt="img" />
              <p className="title">{item.title}</p>
              {item.discount ? <del className="price_del"><span>{item.price} AZN</span></del> : <span className="price">{item.price} AZN</span>}
              {item.discount && <span className="price_discount">{item.discount} AZN</span>}
            </div>
          ))}
        </div>
      
    </main>
  );
};

export default Products;
