import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const Item = Menu.Item

export default function SideMenu() {
    let [curKeys, setCurKeys] = useState(["home"]);
    let [selectedKey, setSelectedKey] = useState(["home1"]);

    function openChange(openKeys) {
        if (openKeys.length === 0) return;
        let newKeys = openKeys.filter(i => curKeys.find(key => key !== i));
        setCurKeys(newKeys.length > 0 ? newKeys : openKeys);
    }

    return (
        <Menu
            openKeys={curKeys}
            selectedKeys={selectedKey}
            mode="inline"
            className="body-side-menu"
            onOpenChange={openChange}
            onSelect={data => setSelectedKey(data.key)}
        >
            <SubMenu
                key="css"
                title="CSS艺术之美"
            >
                <Item key="home1">
                    <Link to="/home">布局方式</Link>
                </Item>
                <Item key="function">
                    <Link to="/home/function">函数计算</Link>
                </Item>
                <Item key="selector">
                    <Link to="/home/selector">选择器</Link>
                </Item>
                <Item key="background">
                    <Link to="/home/background">背景&遮罩</Link>
                </Item>
                <Item key="shadow">
                    <Link to="/home/shadow">阴影&滤镜</Link>
                </Item>
            </SubMenu>
        </Menu>
    );
}