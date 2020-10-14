import React from "react";
import { Button as Boton, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

class Button extends React.Component {
  render() {
    return (
      <>
        <Tooltip title="search">
          <Boton type="primary" shape="rectangle">
            <p>buscar</p>
          </Boton>
        </Tooltip>
      </>
    );
  }
}

export default Button;
