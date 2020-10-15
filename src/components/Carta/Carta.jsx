import React from "react";
import { Card, Avatar } from "antd";
import Button from "../Button/Button";

const { Meta } = Card;

class Carta extends React.Component {
  render() {
      console.log(this.props);


    return (
      <>
        <div
          style={{
            padding: 50,
          }}
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src={this.props.src?this.props.src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
              />
            }
          >
            <Meta
              title={this.props.title}
              description={this.props.description}
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
            />
            <div
              style={{
                display: "flex",
                padding: "30px 0px 0px",
              }}
            >
              <Button></Button>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Carta;
