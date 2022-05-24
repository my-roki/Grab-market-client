import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import MainPageComponent from "./main";
import ProductPageComponent from "./product";
import UploadtPageComponent from "./upload";

import "antd/dist/antd.css";
import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="" />
          </Link>
          <Button
            size="large"
            onClick={() => {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>

          <Route exact={true} path="/products/:id">
            <ProductPageComponent />
          </Route>

          <Route exact={true} path="/upload">
            <UploadtPageComponent />
          </Route>

          <Redirect exact={true} path="/*" to="/" />
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
