// Assignment -1

import { useState } from "react";

export default function App() {
let [products, setProducts] = useState([
    {
      id: 1,
      title: "Krunch Burger",
      desc: "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
      imgUrl:
        "https://www.kfcpakistan.com/images/b438e990-bc23-11ee-be0d-ed0e61ce8a3a-Untitleddesign(5)-min_variant_0-2024-01-26082002.png",
      qunatity: 0,
      price: 290,
    },
    {
      id: 2,
      title: "Rice & Spice",
      desc: "Spiced and buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce",
      imgUrl:
        "https://www.kfcpakistan.com/images/b0c33f70-bc52-11ee-b144-5b816f8c83f0-Riceandspice_variant_0-2024-01-26135623.png",
      qunatity: 0,
      price: 370,
    },
    {
      id: 3,
      title: "Zingeratha",
      desc: "Tender boneless strips, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha",
      imgUrl:
        "https://www.kfcpakistan.com/images/19b05560-bc56-11ee-97d6-7187fd7553de-Zingeratha_variant_0-2024-01-26142047.png",
      qunatity: 0,
      price: 370,
    },
  ]);

  let onIncrement = (index) => {
    if (products[index].qunatity >= 0) {
      let copyProducts = [...products];
      copyProducts[index].qunatity += 1;
      setProducts(copyProducts);
    }
  };

  let onDecrement = (index) => {
    if (products[index].qunatity > 0) {
      let copyProducts = [...products];
      copyProducts[index].qunatity -= 1;
      setProducts(copyProducts);
    }
  };
  let totalQunatity = products.reduce((sum, i) => sum + i.qunatity, 0);
  // const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
  let totalPrice = products.reduce((sum, i) => sum + i.qunatity * i.price, 0);

  return (
    // navbar
    <div className="container-fluid">
      <nav className="navbar bg-black rounded">
        <span className="text-white ms-2 fs-4">Hello:KFC</span>
        <form className="container-fluid justify-content-end">
          <button
            type="button"
            className="me-4 btn position-relative fa-solid fa-cart-shopping text-danger"
          >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">
              {totalQunatity}{" "}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <div className="text-white me-4">|</div>
          <h4 className="text-white">Rs.{totalPrice}</h4>
        </form>
      </nav>
      {/* cards */}
      <div className="d-flex justify-content-center mt-2">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-12 col-sm-6 col-md-4 mt-5 d-flex justify-content-center">
              <div className="card bg-black rounded" style={{ width: "18rem" }}>
                <i className="fa-regular fa-heart text-danger text-end me-3 mt-3"></i>
                <img
                  src={product.imgUrl}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-white">{product.title}</h5>
                  <p className="card-text text-white">{product.desc}</p>
                  <p className="text-white">Rs.{product.price}</p>
                  <a
                    href="#"
                    className="btn btn-danger position-absolute text-white top-100 start-50 translate-middle"
                  >
                    <i
                      className="fa-solid fa-plus"
                      onClick={() => {
                        onIncrement(index);
                      }}
                    ></i>
                    <span className="fs-6">Add to Cart </span>
                    <i
                      className="fa-solid fa-minus"
                      onClick={() => {
                        onDecrement(index);
                      }}
                    ></i>
                    <h6>{product.qunatity}</h6>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// function App() {
//   let a=10;
//   let myName="Zunaira Javaid";
//   let isAvali=false;
//   let myproduct=["pen","pencil","marker"];
//   let products={
//     id:1,
//     name:"pen",
//     qunatity:6,
//     stock:true
//   };
//   return (
//     <div>
//       <h1>My Complete List</h1>
//       <h3>My name is:{myName}</h3>
//       <ol>
//         <li>Coffee</li>
//         <li>Tea</li>
//         <li>Milk</li>
//         <li>a:{a}</li>
//         <li>{isAvali?"Data avalible":"Data not avalible"}</li>
//         {/* <li>{myproduct}</li> for all values */}
//         <li>{myproduct[0]}</li>
//         <hr />
//         <li>ID:{products.id}</li>
//         <li>Qunatity:{products.qunatity}</li>
//       </ol>
//     </div>
//   );
// }
// export default App;
