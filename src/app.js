import React from 'react';
import SideMenu from './layout/SideMenu/SideMenu';
import Top from "./layout/Top/Top";
import { Layout } from "antd";
import { hot } from "react-hot-loader";
import "./styles/style.less";

const { Header, Sider, Content } = Layout;

function App() {
    return (
        <Layout>
            <Header className="base-layout-top"><Top /></Header>
            <Layout>
                <Sider className="base-layout-side-menu"><SideMenu /></Sider>
                <Content>Content</Content>
            </Layout>
        </Layout>
    );
}

export default hot(module)(App);