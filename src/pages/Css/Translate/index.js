import React, { useState } from "react";
import "@/styles/style.less";
import "./page6.less";

export default function Translate() {

    return (
        <>
            <p className='info'>变换</p>
            <div class="heart-shape"></div>
            <p className='info'>像素边框</p>
            <div class="onepx-border normal">1px</div>
            <div class="onepx-border thin">0.5px</div>
            <p className='info'>过渡</p>
            <div class="auto-typing">Do You Want To Know More About CSS Development Skill</div>
        </>
    );
}