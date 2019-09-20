import React, { Component } from "react";
import { Header, Left, Body, Right, Button, Icon, Title } from "native-base";

export default class HeaderIconButtonTextButtonExample extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
