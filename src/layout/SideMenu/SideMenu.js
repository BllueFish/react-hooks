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
                <Item key="home2">
                    <Link to="/home/page2">Home Page 2</Link>
                </Item>
            </SubMenu>
        </Menu>
    );
}