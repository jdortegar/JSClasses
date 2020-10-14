import React from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

class Carta extends React.Component {
  render() {
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
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
            />
          </Card>
        </div>
      </>
    );
  }
}

export default Carta;
