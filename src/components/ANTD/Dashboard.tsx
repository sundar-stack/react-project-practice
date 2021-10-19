import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { languages } from "../../App";
import Form from "../Formik/FormikComponent";

const { Header, Sider, Content, Footer } = Layout;

const { SubMenu } = Menu;

interface Iprops {
  lang: {
    en: "English";
    chi: "China";
    ger: "Germany";
  };
}

const Dashboard: FC<Iprops> = ({ lang }) => {
  console.log(lang);

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ display: "flex", background: "orangered" }}>
        <div>logo</div>

        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ width: "50%" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content
          style={{
            margin: "20px",
            background: "lightgrey",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <h1>SIGNUP Form</h1>
          <Form />
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  );
};

export default Dashboard;
