import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(
        `https://75bb18b8-d369-4dc7-8bb0-956cec12a9e2.mock.pstmn.io/products/${id}`,
      )
      .then((result) => {
        setProduct(result.data);
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
      <div id="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="created-at">2020년 12월 12일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
