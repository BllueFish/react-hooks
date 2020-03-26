import React from 'react';
import SideMenu from './layout/SideMenu/SideMenu';
import Top from "./layout/Top/Top";
import Page1 from "@/pages/Home/Page1/Page1";
import Page2 from "@/pages/Home/Page2/Page2";
import { Layout } from "antd";
import { hot } from "react-hot-loader";
import "./styles/style.less";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const { Sider, Content } = Layout;

function App(props) {
    return (
        <BrowserRouter>
            <Layout>
                <Top />
                <Layout>
                    <Sider className="base-layout-side-menu">
                        <SideMenu />
                    </Sider>
                    <Content className="base-layout-content">
                        <Switch>
                            <Route path="/home" exact component={Page1} />
                            <Route path="/home/page2" component={Page2} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
}

export default hot(module)(App);