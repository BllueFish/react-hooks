import React, { useState } from "react";
import "@/styles/style.less";
import "./page5.less";

const bg1 = require("@/sources/images/bg1.png");

export default function Shadow() {

    return (
        <>
            <p className='info'>定向阴影</p>
            <div className="shadow left"></div>
            <div className="shadow right"></div>
            <div className="shadow up"></div>
            <div className="shadow down"></div>
            <div className="shadow left-up"></div>
            <div className="shadow left-down"></div>
            <div className="shadow right-up"></div>
            <div className="shadow right-down"></div>
            <p className='info'>box-shadow边框</p>
            <div className="shadow-border"></div>
            <p className='info'>聚焦区域</p>
            <div class="img-cliper">
                <img src={bg1} />
                <i></i>
            </div>
        </>
    );
}