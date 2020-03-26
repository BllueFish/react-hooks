import React, { useState } from "react";
import { Menu, Icon, } from "antd";

const { SubMenu } = Menu;
const Item = Menu.Item

export default function SideMenu() {
    let [curKeys, setCurKeys] = useState(["home"]);
    let [selectedKey, setSelectedKey] = useState(["home1"]);

    function openChange(openKeys) {
        let newKeys = openKeys.filter(i => curKeys.find(key => key !== i));
        console.log(newKeys);
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
                key="home"
                title={
                    <span>
                        <Icon type="home" />
                        <span>Home</span>
                    </span>
                }
            >
                <Item key="home1">Home Page 1</Item>
                <Item key="home2">Home Page 2</Item>
            </SubMenu>
        </Menu>
    );
}