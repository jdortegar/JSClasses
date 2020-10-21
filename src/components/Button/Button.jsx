import React from "react";
import { Button as Boton, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// class Button extends React.Component {
//   render() {
//     return (
//       <>
//         <Tooltip title="search">
//           <Boton type="primary" shape="rectangle">
//             {this.props.title}
//           </Boton>
//         </Tooltip>
//       </>
//     );
//   }
// }

const Button = function ({ title }) {
  console.log(`teta`);

  return (<>
    <Tooltip title="search">
      <Boton type="primary" shape="rectangle">
        {title}
      </Boton>
    </Tooltip>
  </>)
};


export default Button;
