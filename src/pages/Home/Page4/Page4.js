import React, { useState } from "react";
import "@/styles/style.less";
import "./page4.less";

export default function Page4() {

    return (
        <>
            <p className='info'>贴顶背景</p>
            <div className="pasted-bg">Background</div>
            <p className='info'>镂空文本</p>
            <div className="hollow-text">Background</div>
            <p className='info'>动态渐变背景</p>
            <div class="gradient-bg"></div>
            <p className='info'>动态渐变文字</p>
            <div class="gradient-text">You are the Sunshine</div>
            <p className='info'>闪烁文本</p>
            <div class="blink-text">Bling Bling 的文本效果</div>
            <p className='info'>方格背景</p>
            <div class="square-bg"></div>
            <p className='info'>网格背景</p>
            <div class="grid-bg"></div>
        </>
    );
}