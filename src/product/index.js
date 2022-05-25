import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch(function (error) {
        console.error("ERROR : ", error);
      });
  });

  if (product === undefined) {
    return <h1>상품 정보를 받고있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={product.imageUrl} alt=""></img>
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
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
