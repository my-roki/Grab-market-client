import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "./index.css";

dayjs.extend(relativeTime);
function MainPage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/products")
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
      <img src="./images/banners/banner1.png" alt="" />
      <h1>판매되는 상품</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card" key={index}>
              <Link className="product-link" to={`/products/${product.id}`}>
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
                  <div className="projuct-footer">
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="./images/icons/avatar.png"
                        alt=""
                      />
                      <span>{product.seller}</span>
                    </div>
                    <span className="product-date">
                      {dayjs(product.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
