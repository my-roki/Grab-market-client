import { Divider, Form, Input, InputNumber, Button } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload__label">상품 사진</div>}
        >
          <div id="upload-image-placeholder">
            <img src="/images/icons/camera.png" alt="" />
            <span>이미지를 업로드해주세요.</span>
          </div>
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
            defaultValue={0}
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
            문제 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
