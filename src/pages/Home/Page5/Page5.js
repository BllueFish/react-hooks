import React, { useState } from "react";
import "@/styles/style.less";
import "./page5.less";

export default function Page5() {

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
            <p className='info'>定向阴影</p>
        </>
    );
}