import { Button, Upload, message } from "antd";
import { Divider, Form, Input, InputNumber } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../config/constant.js";
import "./index.css";

function UploadPage() {
  const [imageUrl, setIamgeUrl] = useState(null);
  const history = useHistory();

  const onSubmit = (values) => {
    axios
      .post(`${API_URL}/products`, {
        name: values.name,
        price: parseInt(values.price),
        seller: values.seller,
        description: values.description,
        imageUrl: imageUrl,
      })
      .then((result) => {
        console.log(result);
        history.replace("");
      })
      .catch((err) => {
        console.error(err);
        message.error(`Error : ${err.message}`);
      });
  };

  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setIamgeUrl(imageUrl);
    }
  };

  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload__label">상품 사진</div>}
        >
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <img id="upload-image" src={`${API_URL}/${imageUrl}`} alt="" />
            ) : (
              <div id="upload-image-placeholder">
                <img src="/images/icons/camera.png" alt="" />
                <span>이미지를 업로드해주세요.</span>
                <span>(Click!)</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          name="seller"
          label={<div className="upload__label">판매자명</div>}
          rules={[{ required: true, message: "판매자 이름을 입력해주세요." }]}
        >
          <Input
            className="upload__name"
            size="large"
            placeholder="판매자 이름을 입력해주세요."
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload__label">상품 이름</div>}
          rules={[{ required: true, message: "상품 이름을 입력해주세요." }]}
        >
          <Input
            className="upload__name"
            size="large"
            placeholder="상품 이름을 입력해주세요."
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload__label">상품 가격</div>}
          rules={[{ required: true, message: "상품 가격을 입력해주세요." }]}
        >
          <InputNumber
            defaultValue={1000}
            min={1000}
            step={10}
            className="upload__price"
            size="large"
          ></InputNumber>
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload__label">상품 소개</div>}
          rules={[{ required: true, message: "상품 소개를 입력해주세요." }]}
        >
          <Input.TextArea
            id="product-description"
            size="large"
            placeholder="상품 소개 입력해주세요."
            showCount
            maxLength={300}
          ></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            상품 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
