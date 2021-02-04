import React from 'react';
import SideMenu from './layout/SideMenu/SideMenu';
import Top from "./layout/Top/Top";
import LayoutPage from "@/pages/Css/Layout";
import FunctionPage from "@/pages/Css/Function";
import Selector from "@/pages/Css/Selector";
import Background from "@/pages/Css/Background";
import Shadow from "@/pages/Css/Shadow";
import Translate from "@/pages/Css/Translate";
import ChangeComponent from "@/pages/Css/ChangeComponent";
import BorderTransition from "@/pages/Css/BorderTransition";
import LineCanvas1 from '@/pages/React/LineCanvas1';
import LineCanvas2 from '@/pages/React/LineCanvas2';
import Dashed from '@/pages/React/Dashed';
import PolyLine from '@/pages/React/PolyLine';
import Circle from '@/pages/React/Circle';
import { Layout } from "antd";
import { hot } from "react-hot-loader";
import "./styles/style.less";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { menuTree } from "@/utils/common";

const { Sider, Content } = Layout;
const getPath = (menuKey) => {
    let pages = [];
    switch (menuKey) {
        case "css":
            pages = [
                {
                    url: "/css/layout",
                    component: LayoutPage
                },
                {
                    url: "/css/function",
                    component: FunctionPage
                },
                {
                    url: "css/selector",
                    component: Selector
                },
                {
                    url: "/css/background",
                    component: Background
                },
                {
                    url: "/css/shadow",
                    component: Shadow
                },
                {
                    url: "/css/translate",
                    component: Translate
                },
                {
                    url: "/css/exercise/change",
                    component: ChangeComponent
                },
                {
                    url: "/css/border",
                    component: BorderTransition
                }
            ];
            break;
        case "react":
            pages = [
                {
                    url: "/react/lineCanvas/1",
                    component: LineCanvas1
                },
                {
                    url: "/react/lineCanvas/2",
                    component: LineCanvas2
                },
                {
                    url: "/react/dashed",
                    component: Dashed
                },
                {
                    url: "/react/polyLine",
                    component: PolyLine
                },
                {
                    url: "/react/circle",
                    component: Circle
                },
            ];
            break;
        default: break;
    }

    return pages;
};
let routers = [];
menuTree.map(item => getPath(item.key)).forEach(item => {
    item.forEach(subItem => {
        let route = <Route key={subItem.url} path={subItem.url} exact component={subItem.component} />;
        routers.push(route);
    });
});

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
                            {routers}
                            <Redirect from="/*" to="/css/layout" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
}

export default hot(module)(App);