import React, { useState } from "react";
import { Button } from "antd";
import "@/styles/style.less";
import "../home.less";
import moment from "moment";

export default function Page2() {
    let [curTime, setCurTime] = useState(moment());

    return (
        <div className="home-page">
            <h3>Today is {moment(curTime).format("YYYY-MM-DD HH:mm:ss")}.</h3>
            <Button
                type="primary"
                onClick={() => setCurTime(moment())}
            >refresh time</Button>
        </div>
    );
}
