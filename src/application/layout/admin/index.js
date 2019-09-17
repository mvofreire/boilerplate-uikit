import React, { Component } from "react";
import {
  Layout,
  Header,
  Content,
  Sider,
  SiderToggle
} from "@hbsis.uikit/react";
import "./admin.css";

const titleStyle = {
  marginLeft: "20px",
  display: "flex",
  height: "100%",
  alignItems: "center"
};

const titleSpanStyled = {
  fontSize: "18px",
  textAlign: "left",
  color: "#2870b2",
  marginLeft: "20px",
  marginTop: "5px"
};
class LayoutAdmin extends Component {
  state = {
    siderOpen: false
  };

  toggleSider = () => {
    this.setState(state => ({
      siderOpen: !state.siderOpen
    }));
  };

  hideSider = () => {
    this.setState({
      siderOpen: false
    });
  };

  render() {
    const { header, content, sideContent } = this.props;
    const { siderOpen } = this.state;

    return (
      <Layout>
        <Sider visible={siderOpen}>{sideContent}</Sider>
        <Layout>
          <Header>
            <div style={titleStyle}>
              <SiderToggle
                active={siderOpen}
                onToggle={this.toggleSider}
                onClickOutside={this.hideSider}
              />
              <span style={titleSpanStyled}>{header}</span>
            </div>
          </Header>
          <Content>{content}</Content>
        </Layout>
      </Layout>
    );
  }
}

export { LayoutAdmin };
