import React, { useState } from "react";
import { Button } from "antd";
import "../../styles/style.less";
import "./home.less";

export default function Home() {
    let [visitCount, setVisitCount] = useState(1);

    return (
        <div className="home-page">
            <h3>This is the home page. Welcome to you.</h3>
            <div>This is your {visitCount}'s click.</div>
            <Button
                type="primary"
                onClick={() => setVisitCount(visitCount++)}
            >Click me</Button>
        </div>
    );
}
