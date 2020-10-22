import React from "react";
import { Card, Avatar, Button } from "antd";


const { Meta } = Card;

class Carta extends React.Component {
  state = {
    photo: this.props.variantes[0].photos[0].url,
    contador: 0
  }

  render() {

    const manejaClick = (indice) => {
      this.setState({
        photo: this.props.variantes[indice].photos[0].url,
        contador: this.state.contador + 1
      })
    }
    console.log(this.state)
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
                src={this.state.photo}
              />
            }
          >
            <h1>{this.state.contador}</h1>
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
                    flexDirection: "column",
                  }}>
                  <Button
                    onClick={() => manejaClick(0)}
                    type='primary'
                  >
                    {this.props.variantes[0].title} </Button>
                  <Button
                    title={this.props.variantes[1].title}
                    onClick={() => manejaClick(1)}
                    type='primary'>
                    {this.props.variantes[1].title}
                  </Button>
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
