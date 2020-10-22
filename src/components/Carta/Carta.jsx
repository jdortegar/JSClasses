import React from "react";
import { Card, Avatar } from "antd";
import Button from "../Button/Button";
import { dataJson } from "../../data";


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
                src={this.props.src ? this.props.src : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
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
            {this.props.showbutton === true && this.props.variantes ?
              (
                <div
                  style={{
                    display: "flex",
                    padding: "30px 0px 0px",
                    width: "100%",
                    justifyContent: "space-between",
                  }}>
                  <Button
                    title={this.props.variantes[0].title}></Button>
                  <Button
                    title={this.props.variantes[1].title}
                  />
                </div>
              ) : null
            }
          </Card>
        </div>
      </>
    );
  }
}

export default Carta;
