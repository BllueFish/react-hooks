import React, { useState } from "react";
import "@/styles/style.less";
import "./index.less";

export default function Background() {

    return (
        <>
            <p className='info'>边框长度变化</p>
            <div className="border-transition"></div>
            <p className='info'>虚线边框动画</p>
            <div className="dashed-border"></div>
            <p className='info'>彩色边框旋转动画</p>
            <div className="line-gradient-border"></div>
            <p className='info'>单色边框旋转动画</p>
            <div style={{ backgroundColor: "#000", padding: 20, width: 240 }}>
                <div className="conic-gradient-border"></div>
                <div className="conic-gradient-border conic-demo"></div>
            </div>
            <p className='info'>border跟随动画</p>
            <div className="clip-path-border"></div>
        </>
    );
}