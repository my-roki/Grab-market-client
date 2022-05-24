import React from "react";
import axios from "axios";

import "./index.css";

function MainPage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://75bb18b8-d369-4dc7-8bb0-956cec12a9e2.mock.pstmn.io/products",
      )
      .then(function (result) {
        // console.log(result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("ERROR : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <img src="./images/banners/banner1.png" alt="" />
        <h1>판매되는 상품</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card" key={index}>
                <div>
                  <img
                    className="product-image"
                    src={product.imageUrl}
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price} 원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="./images/icons/avatar.png"
                      alt=""
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
