import React from "react";
import "./Layout.css";
import { Row, Col, Layout, Space, Button, Card } from "antd";

const { Meta } = Card;

const AntdLayout = () => {
  return (
    // <div className="layout">

    // </div>

    <Layout>
      <Row className="row">
        <Col span={4} style={{ background: "orangered" }}>
          <div style={{ background: "skyblue", height: "80%" }}>sidebar</div>
        </Col>
        <Col span={20} style={{ background: "#d3d3d3" }}>
          col-12
        </Col>
      </Row>
      {/* <Row className="row">
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row className="row">
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row> */}

      <Button type="primary">Text</Button>

      <Card
        title="wrapper"
        hoverable
        bordered={true}
        style={{ width: "50%", margin: "10px 0px" }}
      >
        <div style={{ display: "flex" }}>
          <p>Card content</p>
          <p>Card content </p>
          <p>Card content</p>
          <p>Card content </p>
          <p>Card content </p>
        </div>

        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Layout>
  );
};

export default AntdLayout;
