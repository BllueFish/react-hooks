import React, { useState } from "react";
import { Button } from "antd";
import "@/styles/style.less";
import moment from "moment";

export default function Page2() {
    let [curTime, setCurTime] = useState(moment());

    return (
        <div className="home-page">
            <span>这是一个盒模型测试页面哦～～～</span>
            <span>是嘛？我才知道哎！！！</span>
            <span>可不咋地，大妹子，我还能骗你嘛！</span>
            <span>那我们是不是要好好表现啊？</span>
            <span>不用，保持自我就可以了</span>

        </div>
    );
}
