import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { menuTree } from "@/utils/common";

const { SubMenu } = Menu;
const Item = Menu.Item;

export default function SideMenu() {
    let [curKeys, setCurKeys] = useState(["home"]);
    let [selectedKey, setSelectedKey] = useState(["home"]);

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
            {
                menuTree.map(item => {
                    return <SubMenu key={item.key} title={item.name}>
                        {
                            item.children.length > 0 &&
                            item.children.map(subItem => {
                                return <Item key={subItem.key}
                                >
                                    <Link to={subItem.url}>{subItem.name}</Link>
                                </Item>;
                            })
                        }
                    </SubMenu>
                })
            }
        </Menu>
    );
}