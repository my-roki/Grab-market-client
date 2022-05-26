import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

import "./index.css";
import { API_URL } from "../config/constant.js";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch(function (err) {
        console.error("ERROR : ", err);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={`${API_URL}/${product.imageUrl}`} alt=""></img>
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt=""></img>
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price} 원</div>
        <div id="created-at">
          {dayjs(product.createdAt).format("YYYY년 MM월 DD일")}
        </div>
        <pre id="description">{product.description}</pre>
      </div>
    </div>
  );
}

export default ProductPage;
